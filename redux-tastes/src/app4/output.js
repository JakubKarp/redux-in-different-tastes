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
      number is {actualNumber}
    </div>
  );
}

// store.subscribe(Output)
export default Output;

