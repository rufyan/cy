import React, {useContext, useEffect} from 'react';
import {withRouter} from 'next/router';
import Recently from '../components/Recently';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import config from '../config'
import {Store} from '../store/store'
import GetData from '../actions/getData'


const Index = withRouter((props) => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.data.length === 0 && GetData(dispatch);
  }, [state, dispatch]);
  //const items = GetData(dispatch)
  console.log(state)
  return (
    <>
      <Head>
        <title>Charmaine Yabsley - Freelance Health Journalist</title>
        <meta name="Description" content="Charmaine Yabsley - Media Consultant, Writer, Health Journalist"></meta>
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

//Need to put this in actions/getData
//try to access all worksheets in one hit, not 3
Index.getInitialProps = async () => {
  let homecontent, recent;
  //'2' refers to the 'copy' sheet
  const endpoint = config.endpoint.replace('od6', 2);
  const res = await fetch(endpoint);
  const itemjson =await res.json()
  itemjson.feed.entry.filter((item) => {
    
    if(item.gsx$page.$t ==='home' ){
      homecontent = item.gsx$html.$t ;
    }
  });
  //'3' refers to the 'recent' sheet - not currently used, but should be
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
