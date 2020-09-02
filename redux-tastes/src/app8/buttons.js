import React, {useState} from 'react';
import '../App.css';

function Buttons() {
  const [number, setNumber] = useState(0)

  const add = () => {
    setNumber(prev => prev + 1)
  }

  const subtract = () => {
    setNumber(prev => prev - 1)
  }

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
