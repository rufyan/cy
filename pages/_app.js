import React from 'react'
import {createStore} from "redux";
import App, { Container } from 'next/app'
import Page from '../components/Page'
import withReduxStore from 'next-redux-wrapper'
import { Provider } from 'react-redux'

const reducer = (state = {foo: ''}, action) => {
  switch (action.type) {
      case 'getData':
          return {...state, foo: action.payload};
      default:
          return state
  }
};

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

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

export default withReduxStore(makeStore)(MyApp)