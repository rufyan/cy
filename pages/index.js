
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import conf from '../config';
import Items from '../components/Items';

const PostLink = (props) => (
  <li>
    <Link as={`/portfolio/${props.id}`} href={`/portfolio?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    
  </li>
)

const Index = (props) => (
  <div className="wide row">

  <Items {...props}></Items>
  </div>
)

// let items = [];
// class Index extends React.Component {
//   constructor(props){
//     super(props)
//     items = props.items.filter((item) => (
//       item.gsx$islive.$t === "1"
//     ));
    
//     const itemTypes = [...new Set(
//       items.map((item) => (
//         item.gsx$itemtype.$t 
//         )
//       )
//     )];

//     const titles = [...new Set(
//       items.map((item) => (
//         item.gsx$title.$t
//       ))
//     )]

//     this.state = {
//       items,
//       itemTypes,
//       titles
//     }
//   }

//   handleTitleFilter(value){
//     const filtered = items.filter((item) => (
//       item.gsx$title.$t === value
//       )
//     );
//     this.setState({
//       items : filtered
//     })
//   }

//   render(){
//   return(
//   <>
//     <h1>Type</h1>
//     <ul>
//       <PostLink title="Hello Next.js" id="hello-nextjs"/>
//       <PostLink title="Learn Next.js is awesome" id="awesome-nextjs"/>
//       <PostLink title="Deploy apps with Zeit" id="Zeit-nextjs"/>
//       {this.state.itemTypes.map((item, i) => (
//           <PostLink title={item} id={item.replace(' ','-')}></PostLink>
//       ))}

//     </ul>
//     <p>Filter by title:</p>
//     <ul>
//       {this.state.titles.map((item, i) =>(
//         <li key={i}>
//         <button onClick={() => {this.handleTitleFilter(item)}} key={i}>{item}</button>
//         </li>
//       ))}
//     </ul>
//     <ul>
//       {this.state.items.map((item, i) => (
//         <li key={i}>
//           <p>{item.gsx$title.$t}</p>
//           <Link as={`/p/${item.gsx$heading.$t}`} href={`/post?id=${item.gsx$heading.$t}`}>
//             <a>{item.gsx$heading.$t}</a>
//           </Link>
//             <img src={`${conf.path}/${item.gsx$image.$t}`} alt={item.gsx$heading.$t} />
//         </li>
//       ))}
//     </ul>
//   </>
// )}
//       }

// Index.getInitialProps = async function() {
//   const res = await fetch('https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.feed.entry.length}`)
//   return {
//     items: data.feed.entry
//   }
// }

export default Index
