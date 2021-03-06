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

export const fetchSmileStarted = () => {
  return {
    type: ACTIONS.FETCH_SMILE_STARTED,
  }
}

export const fetchTimerStarted = () => {
  return {
    type: ACTIONS.FETCH_TIMER_STARTED,
  }
}

export const fetchTimerReset = () => {
  return {
    type: ACTIONS.FETCH_TIMER_RESET,
  }
}

export const fetchSmileAndTimer = () => {
  return async dispatch => {
    await dispatch(fetchSmileStarted());
    dispatch(fetchTimerReset());
    dispatch(fetchTimerStarted());
  }
}


// export const fetchSmileSucceeded = (gif) => {
//   return {
//     type: ACTIONS.FETCH_SMILE_SUCCEEDED,
//     payload: {
//       gif,
//     }
//   }
// }

// export const fetchSmile = () => {
//   return async dispatch => {
//     dispatch(fetchSmileStarted());

//     const gif = await api.getSmile()
//     dispatch(fetchSmileSucceeded(gif))
//   }
// };
