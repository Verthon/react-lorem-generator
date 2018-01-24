import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';
import Select from './Select/Select';

class App extends Component {
  pargraphsHandler = (e) => {
    //finished here
    console.log(e.target.value);
    this.setState = ({
      pargraphValue: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Lorem Ipsum Generator</h1>
        </header>
        <main className="App-body">
          <Input onChange={this.pargraphsHandler}/>
          <Output/>
          <Select/>
        </main>  
      </div>
    );
  }
}

export default App;
