import React, {Component} from 'react';
import './Output.css';
  
class Output extends Component {
  state = {
    value: ''
  }
  render(props){
    return(
      <article id="generated-text" className="App-output">
        {this.props.value}
      </article>
    );
  }
}

export default Output;