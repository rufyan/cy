import React from 'react';
import config from '../../config';

export const Recently = () => {
    return (
        <div className='copy'>
            <h2>Recently worked with:</h2>
            <section className='recently'> 
            {/* {recents} */}
                {config.fallback.recently.map((item, i) => (
                <article key={i}>
                    <img src={`./static/images/logos/${item.logo}`} alt={item.name} key={i}/>
                </article>
                ))}         
            </section>
        </div>
    )
}
