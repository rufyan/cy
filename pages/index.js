
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
const Index = (props) => (
  <>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" id="hello-nextjs"/>
      <PostLink title="Learn Next.js is awesome" id="awesome-nextjs"/>
      <PostLink title="Deploy apps with Zeit" id="Zeit-nextjs"/>
    </ul>

    <ul>
      {props.items.map((item, i) => (
        <li key={i}>
        
          <Link as={`/p/${item.gsx$heading.$t}`} href={`/post?id=${item.gsx$heading.$t}`}>
            <a>{item.gsx$heading.$t}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.feed.entry.length}`)
  return {
    items: data.feed.entry
  }
}

export default Index
