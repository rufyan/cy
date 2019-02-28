import Head from 'next/head';
import {withRouter} from 'next/router';
import Items from '../components/Items';


const Content = withRouter((props) => {
  return(
    <>
      <header {...props}>
        <h1>{props.router.query.title}</h1>
      </header>
      <div className="wide row">

          <Head><title>Cyte - {props.router.query.title}</title></Head>
          <p>Charmaine writes content</p>
      </div>
    </>
  )})
    
  export default Content