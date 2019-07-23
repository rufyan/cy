import React from 'react'
import App, { Container } from 'next/app'
import Page from '../components/Page'
import window from 'global'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount(){
      // Only initialize the install button if/after beforeinstallprompt event occurs
      deferredPromptPromise.then(deferredPrompt => {

        // Add install functionality to user gesture
        const btnInstall = document.getElementById('btn-install');
        btnInstall.addEventListener('click', () => {

          // Show the prompt
          deferredPrompt.prompt();

          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice
            .then(choiceResult => {
              console.log('choiceResult', choiceResult);
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }

              // Hide our user interface interface
              document.getElementById('install-wrapper').style.display = 'none';
            });
        });

        // Show the user gesture interface
        document.getElementById('install-wrapper').style.display = 'flex';
      })
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

const deferredPromptPromise = new Promise((resolve, reject) => {

  window.addEventListener('beforeinstallprompt', event => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();

    resolve(event);
  });
});