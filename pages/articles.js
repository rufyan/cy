import {useContext, useEffect} from 'react';
import Head from 'next/head';
import {withRouter} from 'next/router';
import {Store} from '../store/store'
import GetData from '../actions/getData'
import Items from '../components/Items';

const Content = withRouter((props) => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.data.length === 0 && GetData(dispatch);
  }, [state, dispatch]);
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
        {/* Need to pass routes into here, or put them in state */}
        <Items {...state.data} data={"articles"}></Items>
      </div>
    </>
  )});
  
export default Content