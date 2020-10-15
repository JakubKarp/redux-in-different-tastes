import React, {createContext, useContext} from "react";
import {defaultState} from "./app10/redux/reducer"
import Buttons from "./app10/buttons";
import Output from "./app10/output";
import Description from "./app10/description";
import "./App.css";

export const AppContext = createContext(defaultState)

function App10() {
  return (
    <AppContext.Provider >
    <div className="App10">
      <h2>useReducer</h2>
      <div className="container">
        <Buttons />
        <Output />
        <Description />
      </div>
    </div>
</AppContext.Provider>
  );
}

export default App10;