import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Lorem Ipsum Generator</h1>
        </header>
        <main className="App-body">
          <Input/>
          <Output/>
        </main>  
      </div>
    );
  }
}

export default App;
