import Head from 'next/head'
import {getContent} from './api/sheets'
import Items from '../components/Items'

     
export async function getServerSideProps(context:any) {
  const sheet = await getContent('Book');
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
        <h1>Books </h1>
      </header>
      <div className="wide row">
        <Head>
          <title>Books by Charmaine Yabsley - Freelance Health Journalist, health writer</title>
          <meta name="Description" content="Charmaine Yabsley - Books"></meta>
        </Head>
        <Items items={data} data={"books"}></Items> 
      </div>
    </>
  )
}
