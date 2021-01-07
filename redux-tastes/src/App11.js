import React from "react";
import { Provider } from "react-redux";
import store from "./app11/redux/store"
import Buttons from "./app11/buttons";
import Output from "./app11/output";
import Description from "./app11/description";
import "./App.css";

function App11() {
  return (
    <Provider store={store}>
    <div className="App11">
      <h2>Redux with React Hooks</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
    </Provider>
  );
}

export default App11;
