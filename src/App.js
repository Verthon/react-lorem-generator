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
    content: ''
  }

  componentDidMount(){
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${this.state.pValue}&format=${this.state.html}`)
    .then(response => {
      this.setState({
        content: response.data,       
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  //Checking the user input of how many paragraphs
  paragraphsHandler = (event) => {
    //Most important callback it allows to change state after any of users changes of the input
    console.log(this.state.pValue);
    this.setState ({pValue: event.target.value}, this.componentDidMount);
  }

  //Checking the html tags
  htmlTagsHandler = (event) =>{
    let userInput = event.target.value;
    if(userInput === 'yes'){
      this.setState({html: 'html'}, this.componentDidMount)
    }else{
      this.setState({html: 'text'}, this.componentDidMount)
    }
  }
  
  render() {
    
    console.log(this.state.content);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Lorem Ipsum Generator</h1>
        </header>
        <main className="App-body">
          <Input changed={this.paragraphsHandler}/>
          <Select changed={this.htmlTagsHandler}/>
          <Output value={this.state.content}/>
        </main>  
      </div>
    );
  }
}

export default App;
