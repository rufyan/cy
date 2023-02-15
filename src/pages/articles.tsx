import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {getContent} from './api/sheets'

const inter = Inter({ subsets: ['latin'] })
     
export async function getServerSideProps(context:any) {
  const sheet = await getContent('Article');
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
  };
  }

export default function Home({data}) {

  return (
    <>
      <header >
        <h1>Articles </h1>
      </header>
      <div className="wide row">
        <Head>
          <title>Articles by Charmaine Yabsley - Freelance Health Journalist, health writer</title>
          <meta name="Description" content="Charmaine Yabsley - Articles published by Body+Soul, Nature & Health, HCF, The Age"></meta>
        </Head>
        {data.map((i)=> {return i.title})}
        {/* <Items {...props} data={"articles"}></Items> */}
      </div>
    </>
  )
}
