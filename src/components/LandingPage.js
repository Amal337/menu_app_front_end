import React, { Component } from 'react';
import axios from 'axios';
import image2 from './images/image2.jpg';
import image3 from './images/image3.png';
import image4 from './images/image4.jpg';

class LandingPage extends Component {
    btnClick = () => {
       console.log("click!");
    }

//     imageClick = () => {
//         console.log();
//     }

    render() {
        return (
            <div>
                <img src={require('./images/image4.jpg')} />
                <h2>Get Free Dessert</h2>
                <button onClick={(e) => this.btnClick(e)}>Learn more </button>
            </div>
        );
    }
}

export default LandingPage;


