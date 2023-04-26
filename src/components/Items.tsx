import { useRouter } from 'next/router';
import Router from 'next/router'
import {Item} from '../components/Item';
import {useState} from 'react'
import {IFilters} from '../types/Filters'
import { IItem } from '@/types/Item';

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

  const handleFilter = (value: string, filter: "title" | "tag") => {
    let updatedFilters = {};

    switch(filter) {
      case "tag" :
        updatedFilters = {filterByTag : value }
        if(value === filters.filterByTitle || value === 'all') {
          removeQueryParam(filter) 
        } else {  
          Router.push({
            query: { tag: value }
          });
        }
        break;
      case "title" :
        updatedFilters = {filterByTitle : value };
        if(value === filters.filterByTag || value === 'all') {
          removeQueryParam(filter) 
        } else {  
          Router.push({
            query: { title: value }
          });
        }
        break;
    }
    setFilters({...filters, ...updatedFilters});
  }


  const getFilteredItems = () => {
    let filteredItems = props.items;
    //filter by title
    if(router?.query?.title!= null && router.pathname !== '/books'){
      filteredItems = filteredItems.filter((item: IItem) => (
        item.title.toLowerCase() === router?.query?.title?.toLowerCase()
        )
      );
    }

    //filter by tag
    if(router?.query?.tag!= null && router.pathname !== '/books'){
      filteredItems = filteredItems.filter((item: IItem) => (
        item.tags.split(',').map((substring: string) => substring.trim()).some((t) => ( t.toLowerCase() === router?.query?.tag?.toLowerCase())
      ))
      )
    }
   
    //sort filtered items
    filteredItems = filteredItems && filteredItems.sort((a: IItem, b: IItem) => {
      return new Date(b.datePublished) - new Date(a.datePublished);
    });

    // //slice if no other filters set
    filteredItems = filteredItems && filteredItems.slice(0,9);

    return filteredItems;
  }

  const showHideFilter = (show: boolean) =>{
    let updatedFilters: IFilters = {
     filtersVisible : show ? false: true,
    };
    setFilters({...filters, ...updatedFilters})
  }

  const removeQueryParam = (param: string) => {
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
    //TODO set hasFilters
    if(router.pathname !== '/books'){
      titles = [...new Set (props.items.map((t) =>t.title))].filter(x => x!='').sort();
    }else{
      titles = [];
    }
    let tags:string[] = [];
    if(router.pathname !== '/books'){
      tags = [...new Set (props.items.map((t: IItem) =>t.tags.split(',').map((substring: string) => substring.trim())).flat())].filter(x => x!='').sort();
     }
 
    return(
    <>
    {
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
              <button onClick={() => {handleFilter(item === filters.filterByTitle ? 'all' : item, 'title')}} key={i} className={item === filters.filterByTitle ? 'active':''}>{item}</button>
            )))}
          </div>
          <button onClick={() => {handleFilter("all", 'title')}}  className={`clear-filters ${"all" === filters.filterByTitle ? 'active':''}`}>Show all</button>
          </section>
        )}
        
        {tags &&
        (
          <section>
          <p>Tags:</p>
          <div className="span-col-4">
            {tags && (tags.map((item, i) =>(
              <button onClick={() => {handleFilter(item === filters.filterByTag ? 'all' : item, 'tag' )}} key={i} className={item === filters.filterByTag ? 'active':''}>{item}</button>
            )))}
          </div>
          <button onClick={() => {handleFilter("all", "tag")}}  className={`clear-filters ${"all" === filters.filterByTag ? 'active':''}`}>Show all</button>
          </section>
        )}
        </div> 
        </>
      }
      <section className="grid items">
        {filteredItems && filteredItems.map((item: IItem, i: number) =>  (
          <Item {...item} key={i}></Item>
          )
        )}
      </section>
      {
        <button onClick={() => {handleShowAll()}} className={`cta ${filters.firstLoad ? '' : 'hide'}`}>Show all</button>
      }
    </>
  )
}

