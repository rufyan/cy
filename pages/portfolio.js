import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import {withRouter} from 'next/router';
import conf from '../config';
import Items from '../components/Items';


const Content = withRouter((props) => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
      <section className="items">
      <Head><title>Cyte - Por</title></Head>
      {console.log(props)}
      <Items {...props}></Items>
      </section>
    </div>
  ))
    
  export default Content