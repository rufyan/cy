import Head from 'next/head'
import {getContent} from './api/sheets'
import Items from '../components/Items'
import { pageData } from '@/utilities/data';

     
export async function getStaticProps () {
  const sheet = await getContent('Article');
  return pageData(sheet);
}

export default function Home({data}:any) {
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
        { data.content &&
          <Items items={data.content}></Items> 
        }
        {
          data.errorMessage &&
          <p>{data.errorMessage}</p>
        } 
      </div>
    </>
  )
}
