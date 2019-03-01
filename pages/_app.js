import React from 'react'
import App, { Container } from 'next/app'
import Page from '../components/Page'
import fetch from 'isomorphic-unfetch';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }      

    // let items =  fetch('https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json')
    // .then(response => response.json())
    // .then((res) => {
    //   //Once data has come in, process it and set global var
    //   items = res.feed.entry.filter((item) => {
    //     item.tags = item.gsx$tags.$t.split(',').map((t) => (t.trim()));
    //     return  item.gsx$islive.$t === "1"
    //   });
    //   //console.log(items);

    //   const itemTypes = [...new Set(
    //     items.map((item) => (
    //       item.gsx$itemtype.$t 
    //       )
    //     )
    //   )];
  
    //   const titles = [...new Set(
    //     items.map((item) => (
    //       item.gsx$title.$t
    //     ))
    //   )].filter(x => x!='');

    //   const allTags = [];
    //   items.map((item) => (
    //     item.gsx$tags.$t.split(',')
    //   )).filter(x => x!='').forEach((t) => {
    //       t.forEach((r) => {
    //         allTags.push(r.trim())
    //       })
    //     }
    //   );

    //   const tags = [...new Set(allTags)];

    //   pageProps = {
    //     items,
    //     itemTypes,
    //     titles,
    //     loading: 'false',
    //     tags
    //   };
    //   console.log('ppset');  
    // });
    // console.log('pp',pageProps)
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}