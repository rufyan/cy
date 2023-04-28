import Head from 'next/head'
import {getContent} from './api/sheets'
import Items from '../components/Items'
import { pageData } from '@/utilities/data';

     
export async function getServerSideProps(context:any) {
  const sheet = await getContent('Book');
  return pageData(sheet);
}

export default function Home({data}) {
console.log(data)
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
        { data.content &&
        <Items items={data.content} data={"books"}></Items> 
      }
      {
        data.errorMessage &&
        <p>{data.errorMessage}</p>
      } 
      </div>
    </>
  )
}
