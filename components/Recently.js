import React from 'react';
import config from './../config';

class Recently extends React.Component {
    render(){
        return (
            <section className='recently'>   
            {config.recently.map((item, i) => (
                <article id={i}>
                    <img src={`./static/images/logos/${item.logo}`} alt={item.name}/>
                </article>
            ))}         
            </section>
        )
    }
}

export default Recently;