import React from 'react';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';

class Page extends React.Component {
    render(){
        return (
            <>            
            <Meta></Meta>
            <Header></Header>
                {this.props.children}
            <Footer></Footer>
            </>
        )
    }
}

export default Page;