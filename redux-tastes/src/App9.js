import React from "react";
import { Provider } from "react-redux";
import store from "./app9/redux/store"
import Buttons from "./app9/buttons";
import Output from "./app9/output";
import Description from "./app9/description";
import "./App.css";

function App9() {
  return (
    <Provider store={store}>
    <div className="App9">
      <h2>Redux ???</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
</Provider>
  );
}

export default App9;
