import React from 'react';
import './Input.css';


  const Input = (props) =>{
    return(
      <div className="Input-wrapper">
        <label htmlFor="paragraphs-number">Paragraphs: </label>
        <input type="number" name="paragraphs-number" onChange={props.changed} value={props.value}/>
      </div>
    )
  }


export default Input;