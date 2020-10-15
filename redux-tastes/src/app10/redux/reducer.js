import { ACTIONS } from './actions';

export const defaultState = {
  number_1: 21,
}

const reducer = (state = defaultState, action) => {
  // console.log("reducer -> action", action?.payload, action.type)
  switch (action.type) {
    case ACTIONS.INCREASE_NUMBER_1:
      return  { ...state, number_1: state.number_1 + 1 }
      case ACTIONS.DECREASE_NUMBER_1:
        return  { ...state, number_1: state.number_1 - 1 }
    default:
      return state;
  }
}

export default reducer;
