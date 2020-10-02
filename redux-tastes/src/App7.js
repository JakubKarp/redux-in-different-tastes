import React from "react";
import { Provider } from "react-redux";
import store from "./app7/redux/store"
import Buttons from "./app7/buttons";
import Output from "./app7/output";
import Description from "./app7/description";
import "./App.css";

function App7() {
  return (
    <Provider store={store}>
    <div className="App7">
      <h2>Redux Middleware</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
</Provider>
  );
}

export default App7;
