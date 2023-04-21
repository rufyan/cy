import Head from 'next/head'
import {getCopy} from './api/sheets'
     
export async function getServerSideProps(context:any) {
  const sheet = await getCopy('content');
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
        <h1>Content creation</h1>
      </header>
      <div className="wide row">
        <Head>
          <title>Charmaine Yabsley - Freelance Health Journalist, content creator</title>
          <meta name="Description" content="Charmaine Yabsley - Content creation"></meta>
        </Head>
        <article className='copy' dangerouslySetInnerHTML={{__html: data[1].html}}>
      </article> 
      </div>
    </>
  )
}
