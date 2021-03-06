import React from "react";
import Buttons from "./app4/buttons";
import Output from "./app4/output";
import Description from "./app4/description";
import "./App.css";

function App4() {
  return (
    <div className="App4">
      <h2>Simple Redux</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
  );
}

export default App4;
