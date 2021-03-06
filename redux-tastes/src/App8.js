import React from "react";
import { Provider } from "react-redux";
import store from "./app8/redux/store"
import Buttons from "./app8/buttons";
import Output from "./app8/output";
import Description from "./app8/description";
import "./App.css";

function App8() {
  return (
    <Provider store={store}>
    <div className="App8">
      <h2>Redux Saga</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
</Provider>
  );
}

export default App8;
