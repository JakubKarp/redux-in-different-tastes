import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

function Output() {
  const number1 = useSelector(state => state.number_1)
  const number2 = useSelector(state => state.number_2)

  return (
    <div className="output">
      <p> number 1 is {number1}</p>
      <p>number 2 is {number2}</p>
    </div>
  );
}


// dzięki hookowi useSelector pozbywamy się mapStateToProps
// const mapStateToProps = (state) => {
//   return {
//     number1: state.number_1,
//     number2: state.number_2,
//   }
// }

// dzięki hookowi useSelector pozbywamy się connect
// export default connect(mapStateToProps)(Output);
export default Output;
