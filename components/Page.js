import React from 'react';
import Header from './Header';
import Meta from './Meta';

class Page extends React.Component {
    render(){
        return (
            <div className="wide row">
                <Meta></Meta>
                <Header></Header>
                {this.props.children}
            </div>
        )
    }
}

export default Page;