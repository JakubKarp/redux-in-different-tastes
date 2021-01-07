import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseNumber_1, decreaseNumber_1, increaseNumber_2, decreaseNumber_2 } from './redux/actions-creators';
import '../App.css';

function Buttons(props) {
  const dispatch = useDispatch()
  const number1 = useSelector(state => state.number_1)
  const number2 = useSelector(state => state.number_2)

  const addToOne = (number) => {
    dispatch(increaseNumber_1(number));
  }

  const subtractFromOne = (number) => {
    dispatch(decreaseNumber_1(number));
  }

  const addToTwo = (number1, number2) => {
    dispatch(increaseNumber_2(number1, number2));
  }

  const subtractFromTwo = (number1, number2) => {
    dispatch(decreaseNumber_2(number1, number2));
  }

  return (
    <div className="numbers">
     <div className="number">number 1 is {number1}</div>
     <div className="buttons">
      <button onClick={() => addToOne(number1)} className="button">Dodaj</button>
      <button onClick={() => subtractFromOne(number1)} className="button">Odejmij</button>
    </div>
     <div className="number">number 2 is {number2}</div>
     <div className="number">this buttons handle both numbers, try it!</div>
     <div className="buttons">
      <button onClick={() => addToTwo(number1, number2)} className="button">Dodaj</button>
      <button onClick={() => subtractFromTwo(number1, number2)} className="button">Odejmij</button>
    </div>
    </div>
  );
}


export default Buttons;
