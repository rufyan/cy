import Link from 'next/link'
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
      </ul>
    </nav>
)})

export default Header