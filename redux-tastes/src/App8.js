import React from "react";
import Buttons from "./app8/buttons";
import Output from "./app8/output";
import Description from "./app8/description";
import "./App.css";

function App8() {
  return (
    <div className="App8">
      <span>Jestem ósma</span>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
  );
}

export default App8;
