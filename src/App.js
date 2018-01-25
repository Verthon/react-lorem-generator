import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';
import Select from './Select/Select';
import axios from 'axios'

class App extends Component {
  state = {
    pValue: 5,
    html: 'text',
    items: []
  }

  //Checking the user input of how many paragraphs
  paragraphsHandler = (event) => {
    this.setState ({
      pValue: event.target.value
    });
  }

  //Checking the html tags
  htmlTagsHandler = (event) =>{
    console.log(`${event.target.value}`)
    let userInput = event.target.value;
    if(userInput === 'yes'){
      this.setState({
        html: 'html',
      })
    }
  }

  componentDidMount(){
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${this.state.pValue}&format=${this.state.html}`)
    .then(response => {
      this.setState({
        items: response.data
      })
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    let items = this.state.items;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Lorem Ipsum Generator</h1>
        </header>
        <main className="App-body">
          <Input changed={this.paragraphsHandler}/>
          <Select changed={this.htmlTagsHandler}/>
          <Output>{items}</Output>
        </main>  
      </div>
    );
  }
}

export default App;
