import React, { useState } from 'react';
import myOwnStore from "./redux/my-own-redux";
import '../App.css';

function Output() {
  const [actualNumber, setActualNumber] = useState(myOwnStore.getState())

  myOwnStore.subscribe(() => {
    setActualNumber(myOwnStore.getState())
  })

  return (
    <div className="output">
      number is {actualNumber}
    </div>
  );
}

export default Output;
