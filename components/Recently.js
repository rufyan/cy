import React from 'react';
import fetch from 'isomorphic-unfetch';

import config from '../config';

class Recently extends React.Component {
    constructor(props){
        super(props)
    };

    //this isn't fetching properly - cors
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
        return (
            <div className='copy'>
                <h2>Recently worked with:</h2>
                <section className='recently'> 
                    {this.props.recent && Array.from(this.props.recent).map((item, i) => {
                        return (
                    <article key={i}>
                        <img src={`${this.getImage(item.image)}`} alt={item.logo} key={i}/>
                    </article>
                    )}
                    )}         
                </section>
            </div>
        )
    }
}

export default Recently;