import Link from 'next/link'
import {useState} from 'react'

export default function Header(){ 

  const [mobileClicked, setMobileClicked] = useState(false);
  const handleMobilemenuClick = () => {
    setMobileClicked(mobileClicked ? false : true)
  }

  return  (
    <nav className="wide">
     <Link href="/" className="logo">
        Charmaine Yabsley
    </Link>
     <ul className={`main-menu__items ${mobileClicked ? 'mobile-active':''}`}>
       <li>
          <Link as={`/articles`} href={{pathname: '/articles', query: {title: 'Article'}}} onClick={() => handleMobilemenuClick(mobileClicked)}>Articles
          </Link>
          </li>
        <li>
        <Link as={`/books`} href={{pathname: '/books', query: {title: 'Book'}}}  onClick={() => handleMobilemenuClick(mobileClicked)}>Books
          </Link>          
        </li>
        <li>
        <Link as={`/content`} href="/content" onClick={() => handleMobilemenuClick(mobileClicked)}>Content
          </Link>          
        </li>
     </ul>
     <section className={`main-menu__mobile`}>
      <div className={`main-menu__mobile-toggle  ${mobileClicked ? 'active':''}`} onClick={() => handleMobilemenuClick(mobileClicked)}></div>
     </section>
    </nav>
)}

