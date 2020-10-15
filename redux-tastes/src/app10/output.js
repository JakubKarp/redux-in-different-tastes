import React, { useContext } from 'react';
import '../App.css';
import {AppContext} from '../App10';

function Output() {
  const [ state ] = useContext(AppContext)

  return (
    <div className="output">
    <p> number 1 is {state.number_1}</p>
    </div>
  );
}

export default Output;