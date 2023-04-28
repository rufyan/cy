import Head from 'next/head'
import { Inter } from '@next/font/google'
import {getCopy} from './api/sheets'
import { pageData } from '@/utilities/data'
import config from "../../config"
import {Recently} from "../components/Recently"


const inter = Inter({ subsets: ['latin'] })
     
export async function getServerSideProps(context:any) {
  const sheet = await getCopy('home');
  return pageData(sheet); 
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
        {
          data.content &&
          <article className='copy' dangerouslySetInnerHTML={{__html: data.content[0].html}}>
          </article>
        }
        {
          !data.content &&
          <article className='copy' dangerouslySetInnerHTML={{__html: config.fallback.home}}>
          </article>
        }
        {<Recently></Recently> }
      </main>
    </>
  )
}
