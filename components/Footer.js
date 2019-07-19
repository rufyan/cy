const Footer = (() => {
  return  (
    <footer>
      <ul className="socials">
        <li><a href="mailto:charmaine.yabsley+web@gmail.com"><i class="fas fa-envelope-square"></i></a></li>
          <li><a href="https://twitter.com/cyabsley" target='_blank' ><i class="fab fa-twitter-square"></i></a></li>
          <li><a href="http://au.linkedin.com/pub/charmaine-yabsley/3/928/177" target='_blank'><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://www.instagram.com/happygolightlytravels/?hl=en" target='_blank'><i class="fab fa-instagram"></i></a></li>
      </ul>
      <p className='copyright'>Charmaine Yabsley © {new Date().getFullYear()}</p>
    </footer>
)})

export default Footer