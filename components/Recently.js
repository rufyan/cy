import React from 'react';
import config from '../config';

class Recently extends React.Component {
    constructor(props){
        super(props)
    };
//                    {this.props.map((item, i) => ( - doesn't iterate through objects array

    render(){
        console.log(this.props)
        return (
            <div className='copy'>
                <h2>Recently worked with:</h2>
                <section className='recently'> 
                    {config.recently.map((item, i) => (
                    <article key={i}>
                        <img src={`./static/images/logos/${item.logo}`} alt={item.name} key={i}/>
                    </article>
                    ))}         
                </section>
            </div>
        )
    }
}

export default Recently;