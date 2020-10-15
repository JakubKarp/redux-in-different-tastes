import React, { useReducer } from 'react';
import reducer, {defaultState} from './redux/reducer';
import { ACTIONS } from './redux/actions';
import '../App.css';

function Buttons(props) {

const [state, dispatch] = useReducer(reducer, defaultState);

  const addToOne = () => {
    dispatch({type: ACTIONS.INCREASE_NUMBER_1});
  }

  const subtractFromOne = () => {
    dispatch({type: ACTIONS.DECREASE_NUMBER_1});
  }

  return (
    <div className="numbers">
     <div className="number">number 1 is {state.number_1}</div>
     <div className="buttons">
      <button onClick={() => addToOne()} className="button">Dodaj</button>
      <button onClick={() => subtractFromOne()} className="button">Odejmij</button>
    </div>
    </div>
  );
}


export default Buttons;
