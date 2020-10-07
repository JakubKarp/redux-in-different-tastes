import React from 'react';
import { connect } from 'react-redux';
import { increaseNumber_1, decreaseNumber_1, fetchSmileAndTimer } from './redux/actions-creators';
import '../App.css';

function Buttons(props) {
const { number1, gifIsOnBoard } = props;

  const addToOne = (number) => {
    props.dispatch(increaseNumber_1(number));
  }

  const subtractFromOne = (number) => {
    props.dispatch(decreaseNumber_1(number));
  }

  const getSmile = () => {
    props.dispatch(fetchSmileAndTimer());
  }

  return (
    <div className="numbers">
     <div className="number">number 1 is {number1}</div>
     <div className="buttons">
      <button onClick={() => addToOne(number1)} className="button">Dodaj</button>
      <button onClick={() => subtractFromOne(number1)} className="button">Odejmij</button>
    </div>
     <div className="buttons">
       <p>{gifIsOnBoard === '' ? 'Kliknij button żeby zobaczyć uśmiech' : 'Fajnie?' }</p>
      <button onClick={() => getSmile()} className="button" >{gifIsOnBoard === '' ? 'Zobacz uśmiech' : 'Klikaj po więcej uśmiechów'}</button>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number1: state.number_1,
    gifIsOnBoard: state.gif
  }
}

export default connect(mapStateToProps)(Buttons);
