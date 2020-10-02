import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";
import App8 from "./App8";
import { renderApp17 } from "./App17";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(<App3 />, document.getElementById("root3"));

ReactDOM.render(<App4 />, document.getElementById("root4"));

ReactDOM.render(<App5 />, document.getElementById("root5"));

ReactDOM.render(<App6 />, document.getElementById("root6"));

ReactDOM.render(<App7 />, document.getElementById("root7"));

ReactDOM.render(<App8 />, document.getElementById("root8"));

const ll = { some: "ala", any: "gala" };
// const c = renderApp17(ll);
renderApp17(ll);
// console.log("c", c);

// ReactDOM.render(
//   App3(model),
// document.getElementById('root2')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
