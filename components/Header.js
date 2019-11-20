import Link from 'next/link'

class Header extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      mobileclicked : false
    }
  }
  handleMobilemenuClick(state){
    this.setState({mobileclicked : state ? false : true})
  }

  render(){
  return  (
    <nav className="wide">
     <Link href="/">
        <a className="logo">Charmaine Yabsley</a>
    </Link>
     <ul className={`main-menu__items ${this.state.mobileclicked ? 'mobile-active':''}`}>
       <li>
          <Link as={`/articles`} href={{pathname: '/articles', query: {title: 'Article'}}}>
            <a onClick={() => this.handleMobilemenuClick(this.state.mobileclicked)}>Articles</a>
          </Link>
          </li>
        <li>
        <Link as={`/books`} href={{pathname: '/books', query: {title: 'Book'}}} >
            <a onClick={() => this.handleMobilemenuClick(this.state.mobileclicked)}>Books</a>
          </Link>          
        </li>
        <li>
        <Link as={`/content`} href="/content">
            <a onClick={() => this.handleMobilemenuClick(this.state.mobileclicked)}>Content</a>
          </Link>          
        </li>
     </ul>
     <section className={`main-menu__mobile`}>
      <div className={`main-menu__mobile-toggle  ${this.state.mobileclicked ? 'active':''}`} onClick={() => this.handleMobilemenuClick(this.state.mobileclicked)}></div>
     </section>
    </nav>
)}}

export default Header