import { createStore } from 'redux';

const defaultState = {
  ss: 10,
  bb: 12
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'ADD') {
    state.ss = state.ss + 1;
    return {...state};
  }
  if (action.type === 'SUBTRACT') {
    state.ss = state.ss + 1;
    return {...state};
  }
  return state;
}

const store = createStore(reducer)

export default store;

// do wykorzystania 3. funkcje store
// store.getState()
// store.dispatch(action)
// store.subscribe(listener)

