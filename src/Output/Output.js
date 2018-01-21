import React, { Component } from 'react';
import './Output.css';

class Output extends Component{
  constructor(){
    super();
    this.state = {
      paragraphs: [],
    }
  }

  render(){
    return(
      <article id="generated-text" className="App-output">
      </article>
    );
  }
}

export default Output;