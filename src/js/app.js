import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import flowerImage from  '../assets/flower.png';

import Query from './components/query';
import Results from './components/results';

export default class App extends Component {
    state = {
        query: '',
        results: [],
        noResults: '',
        saved: [],
        page: 'home'
    };

    handleQueryChange = e => {
        this.setState({
            query: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.requestData();
    }

    handleSave = item => {
        this.setState( state => {
           return { 
               saved: state.saved.concat(item) 
            };
        });
    }

    requestData = () => {
        const url = `https://images-api.nasa.gov/search?q=${this.state.query}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.collection.items.length > 0) {
                    this.setState({ results: data.collection.items });
                } else {
                    this.setState({
                        noResults: `There are no results available for ${this.state.query}`
                    })
                }
            });
    }

    changeView = (e) => {
        e.preventDefault();
        if (this.state.page === 'home') {
            this.setState({
                page: 'saved'
            });
        } else {
            this.setState({
                page: 'home'
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Search for...</h3>
                    { this.state.page === 'home' && 
                        <a href='/saved' onClick={this.changeView}>View Saved</a>
                    }
                    { this.state.page === 'saved' && 
                        <a href='/home' onClick={this.changeView}>Home</a>
                    }
                </div>

                {this.state.page === 'home' && 
                    <div>
                        <Query query={this.state.query} 
                                handleChange={this.handleQueryChange}
                                handleSubmit={this.handleSubmit}/>
                        <Results results={this.state.results}
                                handleSave={this.handleSave}
                                saved={this.state.saved}/>
                    </div>
                }
                {this.state.page === 'saved' && 
                    <div>
                        <Results results={this.state.saved}
                                handleSave={this.handleSave}
                                saved={this.state.saved}/>
                    </div>
                }
                {this.state.noResults && 
                <div>{this.state.noResults}</div>}
            </div>
        );    
    }
}

render(<App />, document.getElementById('app'));