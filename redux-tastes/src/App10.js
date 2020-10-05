import React from "react";
import { Provider } from "react-redux";
import store from "./app10/redux/store"
import Buttons from "./app10/buttons";
import Output from "./app10/output";
import Description from "./app10/description";
import "./App.css";

function App10() {
  return (
    <Provider store={store}>
    <div className="App10">
      <h2>Redux ????</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
</Provider>
  );
}

export default App10;