import Item from '../components/Item';

class Items extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      loading : 'initial',
      filterByTitle : '',
      filterByTag : '',
      sortByDate :'desc',
      type : '',
      filtersVisible : true,
      width: 0, 
      height: 0,
      filterHeight: 0,
      firstLoad : true
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    //TO DO - move filter to it's own component so that height can be set from itself
    this.setState({
      filtersVisible: window.innerWidth < 1140 ? false : true,
      filterHeight: this.props.tags.length + this.props.titles.length * (window.innerWidth > 1140 ? 
        23 
        : (window.innerWidth > 800 ?
         35 
         : 46)),
      width: window.innerWidth, 
      height: window.innerHeight
    });
  }

  handleShowAll(){
      this.setState({
      firstLoad : false
    })
  }

  handleTitleFilter(value){
    switch(value){
      case 'all' : case this.state.filterByTitle:
          this.setState({
            filterByTitle : '',
            filterByTag : ''
          })
          break;
      default :
      this.setState({
        filterByTitle : value,
        filterByTag : ''
      })
      break;
    }
  }

  handleTagFilter(value){
    if(value !=='all'){
      this.setState({
        filterByTag : value,
        filterByTitle : ''
      })
    }
    else{
      this.setState({
        filterByTag : ''
      })
    }  
  }

  getFilteredItems(){
    let filteredItems = this.props.items;
    //Set item type from page - passed in from links via server.js
    let filterbyType = this.props.router ? this.props.router.query.title : null;
    

    //filter by type
    if(filterbyType){
      filteredItems = filteredItems.filter((item) => (
        item.gsx$itemtype.$t === filterbyType
      ));
    }
   
    //filter by title
    if(this.state.filterByTitle && filterbyType !== 'Book'){
      filteredItems = filteredItems.filter((item) => (
        item.gsx$title.$t === this.state.filterByTitle
        )
      );
    }

    //filter by tag
    if(this.props.filterByTag && filterbyType !== 'Book'){
      filteredItems = filteredItems.filter((item) =>(
        item.tags.some((t) => ( t === this.state.filterByTag)
      ))
      )
    }
   
    //sort filtered items
    filteredItems = filteredItems && filteredItems.sort((a,b) => {
      return new Date(b.gsx$datepublished.$t) - new Date(a.gsx$datepublished.$t);
    });

    //slice if no other filters set
    if(this.state.filterByTag ==='' && this.state.filterByTitle ===''
      && this.state.firstLoad){
      filteredItems = filteredItems && filteredItems.slice(0,9);
    }

    return filteredItems;
  }

  showHideFilter(show){
    this.setState({
      filtersVisible : show ? false: true,
    });
  }

  render(){
   
    //Only render data once loading is false
    const filteredItems = this.getFilteredItems();
    //Put title filters in a local var, unless the type is "Book"
    let titles = [];
    if(this.props.router && this.props.router.query.title ==='Book'){
      titles = null;
    }else{
      titles= this.props.titles;
    }

    let tags = [];
    if(this.props.router && this.props.router.query.title ==='Book'){
      tags = null;
    }else{
      tags= this.props.tags;
    }
 
    return(
    <>
    {this.props.router.query.title !== 'Book' &&
      <>
      <button onClick={() => {this.showHideFilter(this.state.filtersVisible)}} className={`cta show-filters ${this.state.filtersVisible ? "hide-filters" : ""}`}>Filters</button>
      <div className={`filter-holder ${this.state.filtersVisible ? "" : "hide"}`} style={{height:this.state.filterHeight+'px'}}>
        {titles  &&
        (
          <section>
          <p>Titles</p>
          <div className="span-col-4">
            {titles && (titles.map((item, i) =>(
              <button onClick={() => {this.handleTitleFilter(item)}} key={i} className={item === this.state.filterByTitle ? 'active':''}>{item}</button>
            )))}
          </div>
          <button onClick={() => {this.handleTitleFilter("all")}}  className={`clear-filters ${"all" === this.state.filterByTitle ? 'active':''}`}>Show all</button>
          </section>
        )}
        
        {tags &&
        (
          <section>
          <p>Tags:</p>
          <div className="span-col-4">
            {tags && (tags.map((item, i) =>(
              <button onClick={() => {this.handleTagFilter(item === this.state.filterByTag ? 'all' : item )}} key={i} className={item === this.state.filterByTag ? 'active':''}>{item}</button>
            )))}
          </div>
          <button onClick={() => {this.handleTagFilter("all")}}  className={`clear-filters ${"all" === this.state.filterByTag ? 'active':''}`}>Show all</button>
          </section>
        )}
        </div>
        </>
      }
      <section className="grid items">
        {filteredItems && filteredItems.map((item, i) =>  (
          <Item {...item} key={i}></Item>
          )
        )}
      </section>
      <button onClick={() => {this.handleShowAll()}} className={`cta ${this.state.firstLoad ? '' : 'hide'}`}>Show all</button>
    </>
  )
}
}

export default Items
