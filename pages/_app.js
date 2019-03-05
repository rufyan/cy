import React from 'react'
import App, { Container } from 'next/app'
import Page from '../components/Page'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'


class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)