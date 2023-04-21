import { useRouter } from 'next/router';
import Router from 'next/router'
import Item from '../components/Item';
import {useState} from 'react'
import {IFilters} from '../types/Filters'

export default function Items(props){
  const [filters, setFilters] = useState<IFilters>({
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
      });

  const router = useRouter()


  const updateWindowDimensions = () => {
    //TO DO - move filter to it's own component so that height can be set from itself
    const updatedFilters = {
      filtersVisible: window.innerWidth < 1140 ? false : true,
      // filterHeight: this.props.tags.length + this.props.titles.length * (window.innerWidth > 1140 ? 
      //   23 
      //   : (window.innerWidth > 800 ?
      //    35 
      //    : 46)),
      width: window.innerWidth, 
      height: window.innerHeight
        }

    setFilters({...filters, ...updatedFilters});
  }

 const handleShowAll = () =>{
  setFilters({...filters, firstLoad : false})
  }

  const handleTitleFilter = (value: string) => {
    let updatedFilters = {
      filterByTitle : '',
      filterByTag : ''
    }
    switch(value){
      case 'all' : case filters.filterByTitle:
        removeQueryParam('title') 
          break;
      default :
      updatedFilters.filterByTitle = value
      Router.push({
        query: { title: value }
      });
      break;
    }
    console.log(updatedFilters)
    setFilters({...filters, ...updatedFilters});
    

  }

  const handleTagFilter = (value: string) => {
    let updatedFilters: IFilters = {
      filterByTitle : '',
      filterByTag : ''
    } 
    if(value !=='all'){
      updatedFilters.filterByTag = value,
      updatedFilters.filterByTitle =""
    }
    else{
      updatedFilters.filterByTag = '';
    }  
    setFilters({...filters, ...updatedFilters})
  }

  const getFilteredItems = () => {
    let filteredItems = props.items;
    //Set item type from page - passed in from links via server.js
    //let filterbyType = this.props.router ? this.props.router.query.title : null;
    

    // //filter by type
    // if(filterbyType){
    //   filteredItems = filteredItems.filter((item) => (
    //     item.gsx$itemtype.$t === filterbyType
    //   ));
    // }
    //filter by title
    if(router?.query?.title!= null && router.pathname !== '/books'){
      filteredItems = filteredItems.filter((item) => (
        item.title.toLowerCase() === router?.query?.title?.toLowerCase()
        )
      );
    }

    // //filter by tag
    // if(this.props.filterByTag && filterbyType !== 'Book'){
    //   filteredItems = filteredItems.filter((item) =>(
    //     item.tags.some((t) => ( t === this.state.filterByTag)
    //   ))
    //   )
    // }
   
    // //sort filtered items
    filteredItems = filteredItems && filteredItems.sort((a,b) => {
      return new Date(b.datePublished) - new Date(a.datePublished);
    });

    // //slice if no other filters set
    // if(this.state.filterByTag ==='' && this.state.filterByTitle ===''
    //   && this.state.firstLoad){
    //   filteredItems = filteredItems && filteredItems.slice(0,9);
    // }

    return filteredItems;
  }

  const showHideFilter = (show: boolean) =>{
    console.log(show)
    let updatedFilters: IFilters = {
     filtersVisible : show ? false: true,
    };
    console.log(updatedFilters)
    setFilters({...filters, ...updatedFilters})
console.log('filters', filters)
  }

  const removeQueryParam = (param) => {
    const { pathname, query } = router;
    const params = new URLSearchParams(query);
    params.delete(param);
    router.replace(
        { pathname, query: params.toString() },
        undefined, 
        { shallow: true }
    );
};

   
    //Only render data once loading is false
    const filteredItems = getFilteredItems();
    //Put title filters in a local var, unless the type is "Book"
    let titles:string[] = [];
    if(router.pathname !== '/books'){
      titles = [...new Set (props.items.map((t) =>t.title))].filter(x => x!='').sort();
    }else{
      titles = [];
    }
    let tags = [];
    // if(this.props.router && this.props.router.query.title ==='Book'){
    //   tags = null;
    // }else{
    //   tags= this.props.tags;
    // }
 
    return(
    <>
    {//this.props.router.query.title !== 'Book' &&
      <>
       <button onClick={() => {showHideFilter(filters.filtersVisible)}} className={`cta show-filters ${filters.filtersVisible ? "hide-filters" : ""}`}>Filters</button> 
      <div className={`filter-holder ${filters.filtersVisible ? "" : "hide"}`} 
      // style={{height:filters.filterHeight+'px'}}
      >
        {titles  &&
        (
          <section>
          <p>Titles</p>
          <div className="span-col-4">
            {titles && (titles.map((item, i) =>(
              <button onClick={() => {handleTitleFilter(item)}} key={i} className={item === filters.filterByTitle ? 'active':''}>{item}</button>
            )))}
          </div>
          <button onClick={() => {handleTitleFilter("all")}}  className={`clear-filters ${"all" === filters.filterByTitle ? 'active':''}`}>Show all</button>
          </section>
        )}
        
        {tags &&
        (
          <section>
          <p>Tags:</p>
          <div className="span-col-4">
            {tags && (tags.map((item, i) =>(
              <button onClick={() => {this.handleTagFilter(item === filters.filterByTag ? 'all' : item )}} key={i} className={item === filters.filterByTag ? 'active':''}>{item}</button>
            )))}
          </div>
          <button onClick={() => {this.handleTagFilter("all")}}  className={`clear-filters ${"all" === filters.filterByTag ? 'active':''}`}>Show all</button>
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
      {/* <button onClick={() => {this.handleShowAll()}} className={`cta ${filters.firstLoad ? '' : 'hide'}`}>Show all</button> */}
    </>
  )
}

