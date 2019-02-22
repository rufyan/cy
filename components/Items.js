import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import conf from '../config';

let items = [];

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
      //Once data has come in, process it and setState
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
      )];

      this.setState({
        items,
        itemTypes,
        titles,
        loading: 'false'

      });
    });
     
  }

  handleTitleFilter(value){
    const filtered = items.filter((item) => (
      item.gsx$title.$t === value
      )
    );
    this.setState({
      items : filtered
    })
  }

  render(){
    if (this.state.loading === 'initial') {
      return <h2>Intializing...</h2>;
    }

    if (this.state.loading === 'true') {
      return <h2>Loading...</h2>;
    }
    
    //Only render data once loading is false
    return(
    <>
      <h1>Type</h1>
      <ul>
        {this.state.itemTypes.map((item, i) => (
            <PostLink title={item} id={item.replace(' ','-')} key={i}></PostLink>
        ))}

      </ul>
      <p>Filter by title:</p>
      <ul>
        {this.state.titles.map((item, i) =>(
          <li key={i}>
          <button onClick={() => {this.handleTitleFilter(item)}} key={i}>{item}</button>
          </li>
        ))}
      </ul>
      <ul>
        {this.state.items.map((item, i) => (
          <li key={i}>
            <p>{item.gsx$title.$t}</p>
            <Link as={`/p/${item.gsx$heading.$t}`} href={`/post?id=${item.gsx$heading.$t}`}>
              <a>{item.gsx$heading.$t}</a>
            </Link>
              <img src={`${conf.path}/${item.gsx$image.$t}`} alt={item.gsx$heading.$t} />
          </li>
        ))}
      </ul>
    </>
  )
}
}

export default Items
