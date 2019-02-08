import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/portfolio">
      <a style={linkStyle}>Por</a>
    </Link>
    </nav>
)

export default Header