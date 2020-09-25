import React from "react";
import Buttons from "./app7/buttons";
import Output from "./app7/output";
import Description from "./app7/description";
import "./App.css";

function App7() {
  return (
    <div className="App7">
      <span>Jestem siódma</span>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
  );
}

export default App7;
