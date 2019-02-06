import fetch from 'isomorphic-unfetch';
import {withRouter} from 'next/router';
import Layout from '../components/Layout';
import Grid from 'react-css-grid'


const Content = withRouter((props) => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  ))
  
  const Items = ((props) => (
      <Layout>
    <Grid width={600}>
      {props.items.map((item, i) => (
        <div key={i}>
            <p>{item.gsx$heading.$t}</p>
        </div>
      ))}
    </Grid>
      </Layout>
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