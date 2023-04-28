import { pageData } from '@/utilities/data';
import Head from 'next/head'
import {getCopy} from './api/sheets'
import config from "../../config"
     
export async function getServerSideProps(context:any) {
  const sheet = await getCopy('content');
  return pageData(sheet); 
}

export default function Home({data}) {
  return (
    <>
      <header >
        <h1>Content creation</h1>
      </header>
      <div className="wide row">
        <Head>
          <title>Charmaine Yabsley - Freelance Health Journalist, content creator</title>
          <meta name="Description" content="Charmaine Yabsley - Content creation"></meta>
        </Head>
        { data.content &&
          <article className='copy' dangerouslySetInnerHTML={{__html: data.content[1].html}}>
          </article> 
        }      
        {
          !data.content &&
          <article className='copy' dangerouslySetInnerHTML={{__html: config.fallback.contentCreation}}>
          </article>
        } 
      </div>
    </>
  )
}
