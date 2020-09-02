import React, { useState } from 'react';
import store from "./redux/simple-redux";
import '../App.css';

function Output() {
  const [actualNumber, setActualNumber] = useState(store.getState())

  store.subscribe(() => {
    setActualNumber(store.getState())
  })

  return (
    <div className="output">
      <p> number is {actualNumber.ss}</p>
      <p>fixed number from state object {actualNumber.bb}</p>
    </div>
  );
}

export default Output;

