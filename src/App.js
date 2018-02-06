import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input.js';
import Output from './Output/Output.js';
import Select from './Select/Select';
import axios from 'axios'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class App extends Component {
  state = {
    pValue: 5,
    html: 'text',
    content: '',
    value: '',
    copied: false
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Lorem Ipsum Generator</h1>
        </header>
        <nav className="App-nav">
          <Input value={this.props.value} changed={this.paragraphsHandler}/>
          <Select changed={this.htmlTagsHandler}/>
          <CopyToClipboard text={this.state.content}
          onCopy={() => this.setState({copied: true})}>
          <div className="button-wrapper">
            <button className="copy-btn">copy to clipboard</button>
          </div>
          </CopyToClipboard>          
        </nav>
        <main className="App-body">
          <Output value={this.state.content}/>
        </main>  
      </div>
    );
  }
}

export default App;
