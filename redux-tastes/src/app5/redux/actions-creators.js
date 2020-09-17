import { ACTIONS } from './actions';

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

export const increaseNumber_2 = (number_1, number_2) => {
  return {
    type: ACTIONS.INCREASE_NUMBER_2,
    payload: {
      number_1,
      number_2,
    }
  }
}

export const decreaseNumber_2 = (number_1, number_2) => {
  return {
    type: ACTIONS.DECREASE_NUMBER_2,
    payload: {
      number_1,
      number_2,
    }
  }
}