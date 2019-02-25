import React from 'react';
import Header from './Header';
import Meta from './Meta';

class Page extends React.Component {
    render(){
        return (
            <>            
            <Meta></Meta>
            <Header></Header>
                {this.props.children}
            </>
        )
    }
}

export default Page;