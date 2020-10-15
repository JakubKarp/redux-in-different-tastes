import React, { useReducer, useContext } from 'react';
import '../App.css';
import reducer, {defaultState} from './redux/reducer';
import {AppContext} from '../App10';

function Output() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const ll = useContext(AppContext)
  console.log("Output -> useContext(AppContext)", useContext(AppContext))
  console.log("Output -> reducer ll", ll)
  console.log("Output -> state", state.number_1)


  return (
    <div className="output">
    <p> number 1 is {state.number_1}</p>
    </div>
  );
}

export default Output;