import React from 'react';
import fetch from 'isomorphic-unfetch';

import config from '../config';

class Recently extends React.Component {
    constructor(props){
        super(props)
    };
//                    {this.props.map((item, i) => ( - doesn't iterate through objects array
    getImage = async (image) => {
        const header = new Headers({
            'Access-Control-Allow-Origin':'*',
            //'Content-Type': 'multipart/form-data'
        });
        const sendData = {
            method : 'get',
            mode : 'cors',
            header: header,
            body: ''
        }

        return await fetch(image, {sendData})
            .then((response) => {return response.blob()})
            .then((response) => {return URL.createObjectURL(response)})
            .catch((error) => {'catch', console.log(error)})
    }


    render(){

        // let recents= [];
        // for (const key of Object.entries(this.props)) {
            
        //     // const r =  this.getImage(key[1].image);
        //     // console.log('r',typeof r)
            
        //     recents.push(
        //         <article key={key[0]}>
        //             <img src={key[1].image} alt={key[1].logo} key={key[0]}/>
        //         </article>
        //     );
        // }

        return (
            <div className='copy'>
                <h2>Recently worked with:</h2>
                <section className='recently'> 
                {/* {recents} */}
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