import {withRouter} from 'next/router';
import Recently from '../components/Recently';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import config from '../config'

const Index = withRouter((props) => {
  return (
    <>
      <Head>
        <title>Charmaine Yabsley - Freelance Health Journalist</title>
      </Head>

      <main className="wide row home">
      <section className="intro-home">
        <h1>Charmaine Yabsley <span>Freelance health journalist</span></h1>
      </section>
      <article className='copy' dangerouslySetInnerHTML={{__html: props.homecontent}}>
      </article>
      <Recently {...props.recent}></Recently>
      </main>
    </>
)});

Index.getInitialProps = async () => {
  let homecontent, recent;
  const endpoint = config.endpoint.replace('od6', 2);
  const res = await fetch(endpoint);
  const itemjson =await res.json()
  itemjson.feed.entry.filter((item) => {
    
    if(item.gsx$page.$t ==='home' ){
      homecontent = item.gsx$html.$t ;
    }
  });

  const endpointrecent = config.endpoint.replace('od6', 3);
  const resrecent = await fetch(endpointrecent);
  const itemrecentjson =await resrecent.json();

  recent =
    itemrecentjson.feed.entry.map((item) => {
      return {
        logo: item.gsx$company.$t,
        image: item.gsx$image.$t,
      }
    })


  return {
    homecontent,
    recent
  };
}

export default Index
