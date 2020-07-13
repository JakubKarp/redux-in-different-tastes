import React, {useState} from 'react';
import myOwnStore from "./redux/my-own-redux";
import '../App.css';

function Buttons() {
  const [number, setNumber] = useState(myOwnStore.getState())

  const add = () => {
    myOwnStore.dispatch({type: 'ADD'})
  }

  const subtract = () => {
    myOwnStore.dispatch({type: 'SUBTRACT'})
  }

  myOwnStore.subscribe(() => {
    setNumber(myOwnStore.getState())
  })

  return (
    <div className="numbers">
     <div className="number">{number}</div>
     <div className="buttons">
      <button onClick={add} className="button">Dodaj</button>
      <button onClick={subtract} className="button">Odejmij</button>
    </div>
    </div>
  );
}

export default Buttons;
