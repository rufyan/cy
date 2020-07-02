import React from 'react'
import App, { Container } from 'next/app'
import Page from '../components/Page'
import StoreProvider from '../store/store'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Page>
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </Page>
      </Container>
    )
  }
}