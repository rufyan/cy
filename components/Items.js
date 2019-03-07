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
      sortByDate :'desc'
    }
  }

  handleTitleFilter(value){
    if(value !=='all'){
      this.setState({
        filterByTitle : value
      })
    }
    else{
      this.setState({
        filterByTitle : ''
      })
  
    }
  }

  handleTagFilter(value){
    if(value !=='all'){
      this.setState({
        filterByTag : value
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
    if(this.props.filterByTitle && type !== 'Book'){
      console.log(this.state.filterByTitle);
      filteredItems = filteredItems.filter((item) => (
        item.gsx$title.$t === this.state.filterByTitle
        )
      );
    }

    if(this.props.filterByTag && type !== 'Book'){
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

    //TODO Item Paging
    //TODO break spreadsheet into latest sheet, to reduce index page load
    return filteredItems;
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
    {page !== 'home' &&
      <div className="filter-holder">
        {titles  &&
        (
          <section>
          <p>Filter by title:</p>
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
          <p>Filter by tags:</p>
          <div className="span-col-4">
            {tags && (tags.map((item, i) =>(
              <button onClick={() => {this.handleTagFilter(item)}} key={i} className={item === this.state.filterByTitle ? 'active':''}>{item}</button>
            )))}
          </div>
          <button onClick={() => {this.handleTagFilter("all")}}  className={`clear-filters ${"all" === this.state.filterByTitle ? 'active':''}`}>Show all</button>
          </section>
        )}
        </div>
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
