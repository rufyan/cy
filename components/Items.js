import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import conf from '../config';

let items = [];
let type = '';
const PostLink = (props) => (
  <li>
    <Link as={`/portfolio/${props.id}`} href={`/portfolio?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    
  </li>
)

class Items extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      loading : 'initial',
      filterByTitle : '',
      sortByDate :'desc'
    }
  }

  loadData(){
    const data= fetch('https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json')
    .then(response => response.json());
    return data;
  }

  componentDidMount(){
    this.setState({loading : 'true'});
    this.loadData()
    .then((res) => {
      //Once data has come in, process it and set global var
      items = res.feed.entry.filter((item) => (
        item.gsx$islive.$t === "1"
      ));

      const itemTypes = [...new Set(
        items.map((item) => (
          item.gsx$itemtype.$t 
          )
        )
      )];
  
      const titles = [...new Set(
        items.map((item) => (
          item.gsx$title.$t
        ))
      )].filter(x => x!='') ;

      this.setState({
        itemTypes,
        titles,
        loading: 'false',

      });
    });
  }

  handleTitleFilter(value){
    this.setState({
      filterByTitle : value
    })
  }

  getFilteredItems(){
    console.log(this.props.router);
    if(this.props.router){
      type = this.props.router.query.title;
    }else{
      type = '';
    }
    let filteredItems = items;
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
    return filteredItems;
  }

  render(){
    if (this.state.loading === 'initial') {
      return <h2>Intializing...</h2>;
    }

    if (this.state.loading === 'true') {
      return <h2>Loading...</h2>;
    }
    
    //Only render data once loading is false
    const filteredItems = this.getFilteredItems();

    //Put title filters in a local var, unless the type is "Book"
    let titles = [];
    if(this.props.router && this.props.router.query.title ==='Book'){
      titles = null;
    }else{
      titles= this.state.titles;
    }


    return(
    <>
      <h1>Type</h1>
      <ul>
        {/* TODO: Put this in global nav */}
        {this.state.itemTypes && (
          this.state.itemTypes.map((item, i) => (
            <PostLink title={item} id={item.replace(' ','-')} key={i}></PostLink>
        )))}

      </ul>
      <p>Filter by title:</p>
      <ul>
        {titles && (titles.map((item, i) =>(
          <li key={i}>
          <button onClick={() => {this.handleTitleFilter(item)}} key={i}>{item}</button>
          </li>
        )))}
      </ul>
      <ul>
        {filteredItems.map((item, i) =>  (
          <li key={i}>
          <h2>{item.gsx$itemtype.$t}</h2>
            <p>{item.gsx$title.$t}</p>
            <Link as={`/p/${item.gsx$heading.$t}`} href={`/post?id=${item.gsx$heading.$t}`}>
              <a>{item.gsx$heading.$t}</a>
            </Link>
              <img src={item.gsx$image.$t.startsWith('http') ? item.gsx$image.$t : conf.path + item.gsx$image.$t} alt={item.gsx$heading.$t} />
          </li>
          )
        )}
      </ul>
    </>
  )
}
}

export default Items
