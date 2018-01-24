import React, { Component } from 'react';
import './Input.css';


class Input extends Component{
  constructor(props){
    super(props);
  }
  pargraphsHandler = (e) => {
    //finished here
    console.log(e.target.value);
  }

  render(props){
    return(
      <div className="Input-wrapper">
        <label htmlFor="paragraphs-number">Paragraphs: </label>
        <input type="number" name="paragraphs-number" id="" onChange={this.pargraphsHandler}/>
        <label htmlFor="html-select">Include HTML: </label>
        <select name="html-select" id="">
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>  
      </div>
    )
  }
}

export default Input;