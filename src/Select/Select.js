import React from 'react';
import './Select.css';


const Select = (props) =>{
  return(
    <div className="Select-wrapper">
      <label htmlFor="html-select">Include HTML: </label>
      <select name="html-select" id="" onChange={props.changed}>
        <option value="no">no</option>
        <option value="yes">yes</option>
      </select>
    </div>    
    )
  }


export default Select;