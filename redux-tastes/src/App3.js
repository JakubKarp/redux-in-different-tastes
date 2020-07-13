import React from "react";
import Buttons from "./app3/buttons";
import Output from "./app3/output";
import Description from "./app3/description";
import "./App.css";

function App3() {
  return (
    <div className="App3">
      <h2>Redux napisany z ręki od zera</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
  );
}

export default App3;
