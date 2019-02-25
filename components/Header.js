import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const NavLink = (props) => {
  console.log(props);
  (
  <li>
    <Link as={`/portfolio/${props.id}`} href={`/portfolio?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    
  </li>
)
}

const Header = ((props) => {
  console.log('p', props);
  return  (
    <nav>
     <Link href="/">
            <a className="logo">Charmaine Yabsley</a>
          </Link>
     <ul>
       <li>
          <Link as={`/portfolio/Article`} href="/portfolio/Article">
            <a>Articles</a>
          </Link>
          </li>
           
        <li>
        <Link as={`/portfolio/Book`} href="/portfolio/Book">
            <a>Books</a>
          </Link>          
        </li>
      </ul>
    </nav>
)})

export default Header