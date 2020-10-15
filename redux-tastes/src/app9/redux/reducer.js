import { ACTIONS } from './actions';

const defaultState = {
  number_1: 20,
  gif: '',
  isLoading: false,
  timer: 0,
}

const reducer = (state = defaultState, action) => {
  // console.log("reducer -> action", action?.payload, action.type)
  switch (action.type) {
    case ACTIONS.INCREASE_NUMBER_1:
      return  { ...state, number_1: action.payload.number_1 + 1 }
      case ACTIONS.DECREASE_NUMBER_1:
        return  { ...state, number_1: action.payload.number_1 - 1 }
      case ACTIONS.FETCH_SMILE_STARTED:
        return  { ...state, isLoading: true }
      case ACTIONS.FETCH_SMILE_SUCCEEDED:
        return  { ...state, gif: action.payload.gif, isLoading: false }
      case ACTIONS.FETCH_SMILE_FAILED:
        return  { ...state, isLoading: false }
      case ACTIONS.FETCH_TIMER_INCREMENT:
        return  { ...state, timer: state.timer + 1 }
      case ACTIONS.FETCH_TIMER_RESET:
        return  { ...state, timer: 0 }
      default:
        return state;
  }
}

export const oddSelector = (num) => num % 2 ? `${num} this is ODD number` : `${num} this is EVEN number`;

export default reducer;

