import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';
import Select from './Select/Select';

class App extends Component {
  state = {
    pValue: 1,
    html: false
  }

  pargraphsHandler = (event) => {
    this.setState ({
      pValue: event.target.value
    });
    console.log(event.target.value);
  }
  htmlTagsHandler = (event) =>{
    console.log(`${event.target.value}`)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Lorem Ipsum Generator</h1>
        </header>
        <main className="App-body">
          <Input changed={this.pargraphsHandler}/>
          <Select changed={this.htmlTagsHandler}/>
          <Output/>
        </main>  
      </div>
    );
  }
}

export default App;
