import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import {withRouter} from 'next/router';


const Content = withRouter((props) => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  ))
  
const Items = ((props) => (
    <div className="grid">
    <Head><title>Cyte - Por</title></Head>

      {props.items.map((item, i) => (
        <div key={i}>
            <p>{item.gsx$heading.$t}</p>
        </div>
      ))}
    </div>
))

  Items.getInitialProps = async function() {
    const res = await fetch('https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.feed.entry.length}`)

    return {
      items: data.feed.entry
    }
  }
  
  export default Items