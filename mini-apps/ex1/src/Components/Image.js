import React, { Component } from 'react';
import img from './img.jpg'

class Image extends Component {
    state = { 

     }
    render() { 
        return ( 
            <React.Fragment>
                <img src={img} alt="1" width="75px"/>
            </React.Fragment>
         );
    }
}
 
export default Image;