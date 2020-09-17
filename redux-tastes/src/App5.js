import React from "react";
import { Provider } from "react-redux";
import store from "./app5/redux/store"
import Buttons from "./app5/buttons";
import Output from "./app5/output";
import Description from "./app5/description";
import "./App.css";

function App5() {
  return (
    <Provider store={store}>
    <div className="App5">
      <h2>Redux with react-redux and actions creators</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
    </Provider>
  );
}

export default App5;
