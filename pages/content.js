import Head from 'next/head';
import {withRouter} from 'next/router';


const Content = withRouter((props) => {
  console.log(props)
  return(
    <>
      <header {...props}>
        <h1>Content creation</h1>
      </header>
      <div className="wide row">
          <Head><title>Charmaine Yabsley - Freelance Health Journalist, content creator</title></Head>
          <section className='copy'>
            <h2>Charmaine creates PR or copywriting campaigns.</h2>

            <p>
              Whether you're after regular social media output and updates, brochures, advertorials, real-life stories, recipes, wellness plans or just good old-fashioned copy.
            </p><p>
            Previous and current clients include Bupa, Blackmores, Alpro Soya, Fertell, Omega-3, Pomegranate and Fruity Beauty campaigns.
            </p><p>
            View Charmaine's work for Bupa's Blue Room.
            </p><p>
            Please contact at charmaine.yabsley[at]gmail.com to discuss content and copywriting needs.
            </p>
          </section>
      </div>
    </>
  )})
    
  export default Content