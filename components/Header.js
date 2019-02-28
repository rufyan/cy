import Link from 'next/link'

const Header = ((props) => {
  return  (
    <nav>
     <Link href="/">
          <a className="logo">Charmaine Yabsley</a>
          </Link>
     <ul>
       <li>
          <Link as={`/Articles`} href="/Articles">
            <a>Articles</a>
          </Link>
          </li>
           
        <li>
        <Link as={`/Books`} href="/Books">
            <a>Books</a>
          </Link>          
        </li>
        <li>
        <Link as={`/Content`} href="/content">
            <a>Content</a>
          </Link>          
        </li>
     </ul>
    </nav>
)})

export default Header