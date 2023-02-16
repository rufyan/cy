import Header from './Header.tsx'
import Footer from './Footer.tsx'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}