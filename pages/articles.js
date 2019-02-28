import Head from 'next/head';
import {withRouter} from 'next/router';
import Items from '../components/Items';

//var req = require.context('./public/images/articles', false, /\.(png|jpe?g|svg)$/);
// req.keys().forEach(function(key){
//   req(key);
// });

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
    
  export default Content