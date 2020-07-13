import { createStore } from 'redux';

const defaultState = 10;

const reducer = (state = defaultState, action) => {
  if (action.type === 'ADD') {
    return state + 1;
  }
  if (action.type === 'SUBTRACT') {
    return state - 1;
  }
  return state;
}

const store = createStore(reducer)

export default store;

// do wykorzystania 3. funkcje store
// store.getState()
// store.dispatch(action)
// store.subscribe(listener)

