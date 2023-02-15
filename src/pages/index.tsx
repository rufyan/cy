import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {getCopy} from './api/sheets'

const inter = Inter({ subsets: ['latin'] })
     
export async function getServerSideProps(context:any) {
  const sheet = await getCopy('home');
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
  };
  }

export default function Home({data}) {

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
      <article className='copy' dangerouslySetInnerHTML={{__html: data[0].html}}>
      </article>
      {/* <Recently {...props.recent}></Recently> */}
      </main>
    </>
  )
}
