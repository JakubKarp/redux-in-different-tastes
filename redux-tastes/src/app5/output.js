import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

function Output({number1, number2}) {
  return (
    <div className="output">
      <p> number 1 is {number1}</p>
      <p>number 2 is {number2}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number1: state.number_1,
    number2: state.number_2,
  }
}

export default connect(mapStateToProps)(Output);
