import React, { Component } from 'react';
import './Select.css';


class Select extends Component{
 

  render(){
    return(
      <div className="Select-Wrapper">
        <label htmlFor="html-select">Include HTML: </label>
        <select name="html-select" id="">
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>
      </div>    
    )
  }
}

export default Select;