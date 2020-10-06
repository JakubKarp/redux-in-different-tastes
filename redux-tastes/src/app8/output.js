import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

function Output({number1, gif, isLoading}) {
  const gifSmile = gif === '' ? <p>Kliknij w button "Zobacz uśmiech"</p> : <img src={gif} alt="smile" style={{height: '120px'}}/>;
  const smile = isLoading ? <p>Oto loader!!!</p> : gifSmile;

  return (
    <div className="output">
      {smile}
    <p> number 1 is {number1}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number1: state.number_1,
    gif: state.gif,
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps)(Output);