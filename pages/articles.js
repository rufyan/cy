import Head from 'next/head';
import {withRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import Items from '../components/Items';
import config from '../config';

const Content = withRouter((props) => {
  return( 
    <>
      <header {...props}>
        <h1>Articles </h1>
      </header>
      <div className="wide row">
        <Head>
          <title>Articles by Charmaine Yabsley - Freelance Health Journalist, health writer</title>
          <meta name="Description" content="Charmaine Yabsley - Articles published by Body+Soul, Nature & Health, HCF, The Age"></meta>
        </Head>
        <Items {...props} data={"articles"}></Items>
      </div>
    </>
  )});

  Content.getInitialProps = async () => {
    let itemtypes, titles, tags, items;
    const res = await fetch(config.endpoint.replace('od6', 1));
    const itemjson =await res.json();
      //Once data has come in, process it and set global var
    items = itemjson.feed.entry.filter((item) => {
      item.tags = item.gsx$tags.$t.split(',').map((t) => (t.trim()));
      //add items to local array if dev mode, add only live items in production mode
      return process.env.NODE_ENV !== 'production' ? item : item.gsx$islive.$t === "1"
    });

    itemtypes = [...new Set(
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
    itemtypes,
    titles,
    loading: 'false',
    tags
  };
}
    
export default Content