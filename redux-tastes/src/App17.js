import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// model - view - intents (actions)


// model
let model = {
  running: false,
  time: 130
}


//view
const App17 = (model, some) => {
// const App3 = (model, some) => {
  // console.log('JEST?', some);
  // Object.assign( some, {any: "pula"} )
  let minutes = Math.floor(model.time / 60);
  let seconds = model.time - (minutes*60);
  let secondsFormatted = `${seconds < 10 ? 0 : ''}${seconds}`
return <div className="App7">{minutes} : {secondsFormatted}</div>
}

// intents
// let intents = {
//   TICK: 'TICK',
//   START: 'START',
//   STOP: 'STOP',
//   RESET: 'RESET'
// }

// aplly intent to model and return new model
const update = (modela, intent) => {
  const updates = {
    'TICK': (modela) => Object.assign( modela, {time: model.time + 1} )
  }
  return updates[intent] (modela)
}

setInterval(() => {
  model = update(model, "TICK")
  renderApp17()
}, 1000)


export const renderApp17 = () => {
// export const renderApp3 = (some) => {
  // console.log('JEST a?', some);
  ReactDOM.render(
    App17(model),
    // App3(model, some),
  document.getElementById('root17')
  );
  // return some;
}
