import fetch from 'isomorphic-unfetch';
import Items from '../components/Items';
import Recently from '../components/Recently';
import config from '../config';
// import getData from '../actions/getData';
import Head from 'next/head'

const Index = (props) => {
  return (

  <>
  <Head><title>Charmaine Yabsley - Freelance Health Journalist</title></Head>

  <main className="wide row home">
  <section className="intro-home">
    <h1>Charmaine Yabsley <span>Freelance health journalist</span></h1>
  </section>
  <article className='copy'>
  <h2>
  Charmaine is a freelance journalist specialising in health, nutrition, fitness and beauty.
  </h2>
  <p>
  She is the author of several health books - How to look good naked...Can change your life (Based on the TV series of the same name), Yoga, Pilates, Cleanse Purify Energize, The Happy Plan, Naturally Beautiful and Miracle Juices (now in its third reprint).
  </p><p>
  Charmaine appears regularly on television and radio as an expert on various health topics, including the BBC, ABC Gold Coast and comments regularly on the latest health and wellbeing news.
  </p><p>
  She was the launch editor of Holland &amp; Barrett’s best-selling healthy magazine, and allergy magazine.
  </p><p>
  She has more than 15 years experience writing and editing magazines and books in the UK, regularly contributing to Grazia, Zest, Essentials, Easy Living, Red, Healthy, Mirror, Women's Health, Women's Fitness, The Independent, Evening Standard and The Times.
  </p><p>
  Since returning to Australia four years ago, and basing herself on the Gold Coast, Queensland, she has written regularly for Body and Soul, a weekly column for the Sydney Morning Herald's Pulse section, Style magazine, Cosmopolitan, Cosmo Health, Cosmo Pregnancy, Prevention, Good Health, Women's Health, Weight Watchers, Nature and Health, Wellbeing and Women's Health and Fitness.
  </p>
  </article>
  <h2>Recently worked with:</h2>
  <Recently></Recently>
  </main>
  </>
)}

Index.getInitialProps = async () => {
  let itemTypes, titles, tags, items;
  const res = await fetch(config.endpoint);
  const itemjson =await res.json()
    //Once data has come in, process it and set global var
    items = itemjson.feed.entry.filter((item) => {
      item.tags = item.gsx$tags.$t.split(',').map((t) => (t.trim()));
      return  item.gsx$islive.$t === "1"
    });

    itemTypes = [...new Set(
      items.map((item) => (
        item.gsx$itemtype.$t 
        )
      )
    )];

    titles = [...new Set(
      items.map((item) => (
        item.gsx$title.$t
      ))
    )].filter(x => x!='');

    const allTags = [];
    items.map((item) => (
      item.gsx$tags.$t.split(',')
    )).filter(x => x!='').forEach((t) => {
        t.forEach((r) => {
          allTags.push(r.trim())
        })
      }
    );

    tags = [...new Set(allTags)];

  return  {
    items,
    itemTypes,
    titles,
    loading: 'false',
    tags
  };

  }
export default Index
