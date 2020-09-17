import React from 'react';
import { connect } from 'react-redux';
import { increaseNumber_1, decreaseNumber_1, increaseNumber_2, decreaseNumber_2 } from './redux/actions-creators';
import '../App.css';

function Buttons(props) {
const { number1, number2 } = props;

  const addToOne = (number) => {
    props.dispatch(increaseNumber_1(number));
  }

  const subtractFromOne = (number) => {
    props.dispatch(decreaseNumber_1(number));
  }

  const addToTwo = (number1, number2) => {
    props.dispatch(increaseNumber_2(number1, number2));
  }

  const subtractFromTwo = (number1, number2) => {
    props.dispatch(decreaseNumber_2(number1, number2));
  }

  return (
    <div className="numbers">
     <div className="number">number 1 is {number1}</div>
     <div className="buttons">
      <button onClick={() => addToOne(number1)} className="button">Dodaj</button>
      <button onClick={() => subtractFromOne(number1)} className="button">Odejmij</button>
    </div>
     <div className="number">number 2 is {props.number2}</div>
     <div className="number">this buttons handle both numbers, try it!</div>
     <div className="buttons">
      <button onClick={() => addToTwo(number1, number2)} className="button">Dodaj</button>
      <button onClick={() => subtractFromTwo(number1, number2)} className="button">Odejmij</button>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number1: state.number_1,
    number2: state.number_2,
  }
}

export default connect(mapStateToProps)(Buttons);
