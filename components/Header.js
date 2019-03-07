import Link from 'next/link'

const Header = ((props) => {
  return  (
    <nav>
     <Link href="/">
        <a className="logo">Charmaine Yabsley</a>
    </Link>
    {/* TODO: Make mobile */}
     <ul className='main-menu__items'>
       <li>
          <Link as={`/articles`} href="/articles">
            <a>Articles</a>
          </Link>
          </li>
           
        <li>
        <Link as={`/books`} href="/books">
            <a>Books</a>
          </Link>          
        </li>
        <li>
        <Link as={`/content`} href="/content">
            <a>Content</a>
          </Link>          
        </li>
     </ul>
     <section className='main-menu__mobile'>
      <div className='main-menu__mobile-toggle'></div>
     </section>
    </nav>
)})

export default Header