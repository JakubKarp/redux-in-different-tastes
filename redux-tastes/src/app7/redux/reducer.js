import { ACTIONS } from './actions';

const defaultState = {
  number_1: 20,
  gif: '',
}

const reducer = (state = defaultState, action) => {
  // console.log("reducer -> action", action?.payload, action.type)
  switch (action.type) {
    case ACTIONS.INCREASE_NUMBER_1:
      return  { ...state, number_1: action.payload.number_1 + 1 }
      case ACTIONS.DECREASE_NUMBER_1:
        return  { ...state, number_1: action.payload.number_1 - 1 }
      case ACTIONS.FETCH_SMILE_SUCCEEDED:
        return  { ...state, gif: action.payload }
    default:
      return state;
  }
}

export default reducer;
