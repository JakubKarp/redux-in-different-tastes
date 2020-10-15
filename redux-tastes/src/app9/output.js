import React from 'react';
import { connect } from 'react-redux';
import { oddSelector } from './redux/reducer';
import '../App.css';

function Output({number1, gif, isLoading, timer}) {
  const gifSmile = gif === '' ? <p>Kliknij w button "Zobacz uśmiech"</p> : <img src={gif} alt="smile" style={{height: '120px'}}/>;
  const smile = isLoading ? <p>Oto loader!!!</p> : gifSmile;

  return (
    <div className="output">
      {smile}
    <p> jak długo trwa ten uśmiech? {timer} sekund</p>
    <p> number 1 is {number1}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number1: oddSelector(state.number_1),
    gif: state.gif,
    isLoading: state.isLoading,
    timer: state.timer,
  }
}

export default connect(mapStateToProps)(Output);