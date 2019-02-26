import Items from '../components/Items';

const Index = (props) => (
  <main className="wide row">
  <section class="intro-home">
    <h1>Charmaine Yabsley <span>Freelance health journalist</span></h1>
  </section>
  <Items {...props}></Items>
  </main>
)


export default Index
