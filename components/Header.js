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
     <section className='main-menu__mobile'>
      <div className='main-menu__mobile-toggle'></div>
     </section>
    </nav>
)})

export default Header