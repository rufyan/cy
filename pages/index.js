import Items from '../components/Items';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import getData from '../actions/getData'

class Index extends React.Component {
  static async getInitialProps ({ store, req }) {
    
    await store.dispatch(getData())

    return {}
  }

  render () {
      <main className="wide row">

  <Items {...props}></Items>
  </main>

  }
}
 
export default connect()(Index)
