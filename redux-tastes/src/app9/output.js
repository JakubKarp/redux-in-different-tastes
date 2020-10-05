import React from 'react';
import { connect } from 'react-redux';
import '../App.css';


function Output({number1, gif}) {
  const gifSmile = gif === '' ? <p>Kliknij w button "Zobacz uśmiech"</p> : <img src={gif} alt="smile" style={{height: '120px'}}/>;

  return (
    <div className="output">
      {gifSmile}
    <p> number 1 is {number1}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number1: state.number_1,
    gif: state.gif,
  }
}

export default connect(mapStateToProps)(Output);