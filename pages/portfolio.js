import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import {withRouter} from 'next/router';
import Items from '../components/Items';


const Content = withRouter((props) => {
  console.log(props)
  return(
    <>
      <header {...props}>
        <h1>{props.router.query.title}s</h1>
      </header>
      <div className="wide row">

        <section className="items">
          <Head><title>Cyte - Por {props.router.query.title}</title></Head>
          <Items {...props}></Items>
        </section>
      </div>
    </>
  )})
    
  export default Content