import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/style.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
