import Head from 'next/head';
import {withRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import Items from '../components/Items';
import config from '../config';


const Content = withRouter((props) => {
  return(
    <>
      <header {...props}>
        <h1>Books</h1>
      </header>
      <div className="wide row">

          <Head>
            <title>Books by Charmaine Yabsley - Health Journalist, author</title>
            <meta name="Description" content="Charmaine Yabsley - published author of health and beauty books"></meta>

          </Head>
          <Items {...props}></Items>
      </div>
    </>
  )})
 
  Content.getInitialProps = async () => {
    let itemtypes, titles, tags, items;
    const res = await fetch(config.endpoint);
    const itemjson =await res.json()
      //Once data has come in, process it and set global var
      items = itemjson.feed.entry.filter((item) => {
        item.tags = item.tags.split(',').map((t) => (t.trim()));
        return  item.islive === "1"
      });
  
      itemtypes = [...new Set(
        items.map((item) => (
          item.itemtype 
          )
        )
      )];
  
      titles = [...new Set(
        items.map((item) => (
          item.title
        ))
      )].filter(x => x!='');
  
      const allTags = [];
      items.map((item) => (
        item.tags.split(',')
      )).filter(x => x!='').forEach((t) => {
          t.forEach((r) => {
            allTags.push(r.trim())
          })
        }
      );
  
      tags = [...new Set(allTags)];
  
    return  {
      items,
      itemtypes: itemtypes,
      titles,
      loading: 'false',
      tags
    };
  
    }
  export default Content