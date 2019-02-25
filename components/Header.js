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
      <ul>
        <li>
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>

        </li>
         <li>
          
        </li>
          <Link href="/portfolio">
            <a style={linkStyle}>Por</a>
          </Link>
          <ul>
          {props.itemTypes && (
            props.itemTypes.map((item, i) => (
              <NavLink title={item} id={item.replace(' ','-')} key={i}></NavLink>
          )))}

          </ul>
        <li>
          
        </li>
      </ul>
    {/* <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link> */}
    </nav>
)})

export default Header