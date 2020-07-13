import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import { renderApp3 } from './App3';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

const ll = {"some": "ala", "any": "gala"}
const c = renderApp3(ll);
console.log("c", c)

// ReactDOM.render(
//   App3(model),
// document.getElementById('root2')
// );


ReactDOM.render(
  <App4 />,
document.getElementById('root4')
);

ReactDOM.render(
  <App5 />,
document.getElementById('root5')
);

ReactDOM.render(
  <App6 />,
document.getElementById('root6')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
