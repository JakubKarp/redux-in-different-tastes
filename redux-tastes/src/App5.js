import React from "react";
import Buttons from "./app5/buttons";
import Output from "./app5/output";
import Description from "./app5/description";
import "./App.css";

function App5() {
  return (
    <div className="App5">
      <span>Jestem piąta</span>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
  );
}

export default App5;
