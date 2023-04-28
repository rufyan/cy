import { useRouter } from 'next/router';
import {Item} from '../components/Item';
import {useState} from 'react'
import {IFilters} from '../types/Filters'
import { IItem } from '@/types/Item';

interface ItemsProps {
  items: IItem[]
}

export default function Items(props: ItemsProps){
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
  

  const router = useRouter();
  const showFilters = router.pathname !== '/books';
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
    let updatedFilters = Object.assign(filters);

    switch(filter) {
      case "tag" :
        updatedFilters.filterByTag = value;
        updatedFilters.filterByTitle = '';
        if(value === filters.filterByTitle || value === 'all') {
          removeQueryParam(filter) 
        }
        break;
      case "title" :
        updatedFilters.filterByTitle = value;
        updatedFilters.filterByTag = '';
        if(value === filters.filterByTag || value === 'all') {
          removeQueryParam(filter) 
        }
        break;
    }
    setFilters({...filters, ...updatedFilters});
  }


  const getFilteredItems = () => {
    let filteredItems = props.items;
    //filter by title
    if(filters.filterByTitle && filters.filterByTitle != 'all' && showFilters){
      filteredItems = filteredItems.filter(
        (item: IItem) => (item.title.toLowerCase() === filters.filterByTitle.toLowerCase())
      );
    }

    //filter by tag
    if(filters.filterByTag && filters.filterByTag != 'all' && showFilters){
      filteredItems = filteredItems.filter(
        (item: IItem) => (
          item.tags.split(',').map(
            (substring: string) => substring.trim()
          ).some(
            (t) => ( t.toLowerCase() === filters.filterByTag.toLowerCase())
          )
        )
      );
    }
   
    //sort filtered items
    filteredItems = filteredItems && filteredItems.sort((a: IItem, b: IItem) => {
      return new Date(b.datePublished) > new Date(a.datePublished);
    });

    return filteredItems;
  }

  const sliceItems = (unslicedItems: IItem[]): IItem[] => {
    return unslicedItems && filters.firstLoad 
    ? unslicedItems.slice(0,8)
    : unslicedItems;
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
  const unslicedItems = getFilteredItems();
  const slicedItems = sliceItems(unslicedItems);
  let titles:string[] = [];
  let tags:string[] = [];

  titles = showFilters 
  ? [...new Set (props.items.map((t) =>t.title))].filter(x => x!='').sort()
  : [];
  

  tags = showFilters 
  ? [...new Set (props.items.map((t: IItem) =>t.tags.split(',').map((substring: string) => substring.trim())).flat())].filter(x => x!='').sort()
  : [];
    
  return (
    <>
    {
      showFilters
      && <>
        <button onClick={() => {showHideFilter(filters.filtersVisible as boolean)}} className={`cta show-filters ${filters.filtersVisible ? "hide-filters" : ""}`}>Filters</button> 
        <div className={`filter-holder ${filters.filtersVisible ? "" : "hide"}`} 
        // style={{height:filters.filterHeight+'px'}}
        >
          {
            titles  &&
            (
              <section>
              <p>Titles</p>
              <div className="span-col-4">
                {titles && (titles.map((item, i) =>(
                  <button onClick={() => {handleFilter(item === filters.filterByTitle ? 'all' : item, 'title')}} key={i} className={item === filters.filterByTitle ? 'active':''}>{item}</button>
                )))}
              </div>
              <button onClick={() => {handleFilter("all", 'title')}}  className={`clear-filters`}>Show all</button>
              </section>
            )
          }
          
          {tags &&
            (
              <section>
              <p>Tags:</p>
              <div className="span-col-4">
                {tags && (tags.map((item, i) =>(
                  <button onClick={() => {handleFilter(item === filters.filterByTag ? 'all' : item, 'tag' )}} key={i} className={item === filters.filterByTag ? 'active':''}>{item}</button>
                )))}
              </div>
              <button onClick={() => {handleFilter("all", "tag")}}  className={`clear-filters`}>Show all</button>
              </section>
            )
          }
        </div> 
      </>
      }
      <section className="grid items">
        {slicedItems && slicedItems.map((item: IItem, i: number) =>  (
          <Item {...item} key={i}></Item>
          )
        )}
      </section>
      {
        unslicedItems.length > 8 && filters.firstLoad &&
        <button onClick={() => {handleShowAll()}} className={`cta ${filters.firstLoad ? '' : 'hide'}`}>Show more</button>
    }
    </>
  )
}

