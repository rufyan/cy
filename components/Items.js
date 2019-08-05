import Item from '../components/Item';

let items = [];
let type = '';
let page = '';

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
      filterHeight: 0
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
    if(this.props.router){
      type = this.props.router.query.title;
    }else{
      type = '';
    }
    let filteredItems = this.props.items;
    let filterbyType = this.props.router ? this.props.router.query.title : null;
    
    //filter by type
    if(type){
      filteredItems = filteredItems.filter((item) => (
        item.gsx$itemtype.$t === filterbyType
      ));
    }else{
      
    }

    //filter by title
    if(this.state.filterByTitle && type !== 'Book'){
      filteredItems = filteredItems.filter((item) => (
        item.gsx$title.$t === this.state.filterByTitle
        )
      );
    }

    if(this.state.filterByTag && type !== 'Book'){
      filteredItems = filteredItems.filter((item) =>(
        item.tags.some((t) => ( t === this.state.filterByTag)
      ))
      )
    }

    filteredItems = filteredItems && filteredItems.sort((a,b) => {
      return new Date(b.gsx$datepublished.$t) - new Date(a.gsx$datepublished.$t);
    });

    if(this.props.data ==='home'){
      page = 'home';
      filteredItems = filteredItems && filteredItems.slice(0,4);
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

   // this.state.filterHeight = this.props.tags.length + this.props.titles.length * (this.state.width > 1200 ? 25 : 42);
    
    return(
    <>
    {this.props.router.query.title !== 'Book' &&
      <>
      <button onClick={() => {this.showHideFilter(this.state.filtersVisible)}} className={`show-filters ${this.state.filtersVisible ? "hide" : ""}`}>Filters</button>
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
    </>
  )
}
}

export default Items
