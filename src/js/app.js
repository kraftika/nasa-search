import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import flowerImage from  '../assets/flower.png';

import Query from './query';

export default class App extends Component {
    state = {
        query: ''
    };

    handleQueryChange = (e) => {
        this.setState({
            query: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.query);
    }

    render() {
        return (
            <div>
                <p>I like flowers!</p>
                <img src={ flowerImage } alt='I like flowers' />
                <p>Do you like?</p>
                <Query query={this.state.query} 
                        handleChange={this.handleQueryChange}
                        handleSubmit={this.handleSubmit}/>
            </div>
        );    
    }
}

render(<App />, document.getElementById('app'));