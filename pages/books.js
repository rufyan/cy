import Head from 'next/head';
import {withRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import Items from '../components/Items';
import config from '../config';


const Content = withRouter((props) => {
  return(
    <>
      <header {...props}>
        <h1>{props.router.query.title}s</h1>
      </header>
      <div className="wide row">

          <Head><title>Cyte - Por {props.router.query.title}</title></Head>
          <Items {...props}></Items>
      </div>
    </>
  )})
 
  Content.getInitialProps = async () => {
    let itemTypes, titles, tags, items;
    const res = await fetch(config.endpoint);
    const itemjson =await res.json()
      //Once data has come in, process it and set global var
      items = itemjson.feed.entry.filter((item) => {
        item.tags = item.gsx$tags.$t.split(',').map((t) => (t.trim()));
        return  item.gsx$islive.$t === "1"
      });
  
      itemTypes = [...new Set(
        items.map((item) => (
          item.gsx$itemtype.$t 
          )
        )
      )];
  
      titles = [...new Set(
        items.map((item) => (
          item.gsx$title.$t
        ))
      )].filter(x => x!='');
  
      const allTags = [];
      items.map((item) => (
        item.gsx$tags.$t.split(',')
      )).filter(x => x!='').forEach((t) => {
          t.forEach((r) => {
            allTags.push(r.trim())
          })
        }
      );
  
      tags = [...new Set(allTags)];
  
    return  {
      items,
      itemTypes,
      titles,
      loading: 'false',
      tags
    };
  
    }
  export default Content