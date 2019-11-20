import Head from 'next/head';
import {withRouter} from 'next/router';
import config from '../config'


const Content = withRouter((props) => {
  return(
    <>
      <header {...props}>
        <h1>Content creation</h1>
      </header>
      <div className="wide row">
          <Head>
            <title>Charmaine Yabsley - Freelance Health Journalist, content creator</title>
            <meta name="Description" content="Charmaine Yabsley - content creator, brand voice, PR campaign"></meta>

            </Head>
          <section className='copy' dangerouslySetInnerHTML={{__html: props.content}}>
          </section>
      </div>
    </>
  )})

  Content.getInitialProps = async () => {
    let content;
    const endpoint = config.endpoint.replace('od6', 2)
    const res = await fetch(endpoint);
    const itemjson =await res.json()
    itemjson.feed.entry.filter((item) => {
      
      if(item.gsx$page.$t ==='content' ){
        content = item.gsx$html.$t ;
      }
    });
  
    return {
      content
    };
  }

  export default Content