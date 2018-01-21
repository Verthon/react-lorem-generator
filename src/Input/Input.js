import React, { Component } from 'react';
import './Input.css';


class Input extends Component{
  constructor(){
    super();
    
  }

  render(){
    return(
      <div className="Input-wrapper">
        <label htmlFor="paragraphs-number">Paragraphs: </label>
        <input type="number" name="paragraphs-number" id=""/>
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