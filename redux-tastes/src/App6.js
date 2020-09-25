import React from "react";
import { Provider } from "react-redux";
import store from "./app6/redux/store"
import Buttons from "./app6/buttons";
import Output from "./app6/output";
import Description from "./app6/description";
import "./App.css";

function App6() {
  return (
<Provider store={store}>
    <div className="App6">
      <h2>Redux Thunk</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
</Provider>
  );
}

export default App6;
