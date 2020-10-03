import { ACTIONS } from './actions';
// import CONSTS from '../../consts/consts';
import { CALL_API } from '../middleware/api';

export const increaseNumber_1 = (number_1) => {
  return {
    type: ACTIONS.INCREASE_NUMBER_1,
    payload: {
      number_1,
    }
  }
}

export const decreaseNumber_1 = (number_1) => {
  return {
    type: ACTIONS.DECREASE_NUMBER_1,
    payload: {
      number_1,
    }
  }
}

export const fetchSmileFromMiddleware = () => {
  return {
    [CALL_API]: {
      types: [ACTIONS.FETCH_SMILE_STARTED, ACTIONS.FETCH_SMILE_SUCCEEDED, ACTIONS.FETCH_SMILE_FAIL],
      endpoint: 'smile'
    }
  }
}
