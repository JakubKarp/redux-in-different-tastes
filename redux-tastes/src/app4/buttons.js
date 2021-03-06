import React, {useState} from 'react';
import store from "./redux/simple-redux";
import '../App.css';

function Buttons() {
  const [number, setNumber] = useState(store.getState())

  const add = () => {
    store.dispatch({type: 'ADD'})
  }

  const subtract = () => {
    store.dispatch({type: 'SUBTRACT'})
  }

  store.subscribe(() => {
    setNumber(store.getState())
  })

  return (
    <div className="numbers">
     <div className="number">{number.ss}</div>
     <div className="number">fixed number {number.bb}</div>
     <div className="buttons">
      <button onClick={add} className="button">Dodaj</button>
      <button onClick={subtract} className="button">Odejmij</button>
    </div>
    </div>
  );
}

export default Buttons;
