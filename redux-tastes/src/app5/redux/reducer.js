import { ACTIONS } from './actions';

const defaultState = {
  number_1: 20,
  number_2: 30,
}

const reducer = (state = defaultState, action) => {
  console.log("reducer -> action", action?.payload)
  switch (action.type) {
    case ACTIONS.INCREASE_NUMBER_1:
      return  { ...state, number_1: action.payload.number_1 + 1 }
      case ACTIONS.DECREASE_NUMBER_1:
        return  { ...state, number_1: action.payload.number_1 - 1 }
    case ACTIONS.INCREASE_NUMBER_2:
      return  { number_1: action.payload.number_1 + 5, number_2: action.payload.number_2 + 1 }
      case ACTIONS.DECREASE_NUMBER_2:
        return  { number_1: action.payload.number_1 - 5, number_2: action.payload.number_2 - 1 }
    default:
      return state;
  }
}

export default reducer;
