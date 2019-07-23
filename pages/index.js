import {withRouter} from 'next/router';
import Recently from '../components/Recently';
import Head from 'next/head'
import config from '../config'

const Index = withRouter((props) => {
  return (
    <>
      <Head><title>Charmaine Yabsley - Freelance Health Journalist</title></Head>

      <main className="wide row home">
      <section className="intro-home">
        <h1>Charmaine Yabsley <span>Freelance health journalist</span></h1>
      </section>
      <article className='copy' dangerouslySetInnerHTML={{__html: props.homecontent}}>
      </article>
      <Recently></Recently>
      </main>
    </>
)});

Index.getInitialProps = async () => {
  let homecontent;
  const endpoint = config.endpoint.replace('{0}', 2)
  const res = await fetch(endpoint);
  const itemjson =await res.json()
  itemjson.feed.entry.filter((item) => {
    
    if(item.gsx$page.$t ==='home' ){
      homecontent = item.gsx$html.$t ;
    }
  });

  return {
    homecontent
  };
}

export default Index
