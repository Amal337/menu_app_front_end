import React, { Component } from 'react';
import axios from 'axios';

export default class LandingPage2 extends React.Component {
    state = {
        restaurants: [],
    };
    componentDidMount() {
        axios.get("https://shielded-mesa-36213.herokuapp.com/api/restaurants").then(res => {
            console.log(res.data.restaurants);
            this.setState({ restaurants: res.data.restaurants });
        });
    }
    render() {
        
        return (
            <div>
               {this.state.restaurants.map(e => <img src={e.image}/>)}
            </div>
        )
    }
}
