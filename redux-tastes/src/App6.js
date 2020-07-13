import React from "react";
import Buttons from "./app6/buttons";
import Output from "./app6/output";
import Description from "./app6/description";
import "./App.css";

function App6() {
  return (
    <div className="App6">
      <span>Jestem szósta</span>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
  );
}

export default App6;
