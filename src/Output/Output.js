import React, { Component } from 'react';
import './Output.css';
import axios from 'axios';

class Output extends Component{
  constructor(){
    super();
    this.state = {
      paragraphs: [],
    }
  }
  componentDidMount(){
    axios.get('https://baconipsum.com/api/?type=all-meat')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render(){
    return(
      <article id="generated-text" className="App-output">
      </article>
    );
  }
}

export default Output;