import { ACTIONS } from './actions';
import CONSTS from '../../consts/consts';

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

export const fetchSmileSucceeded = (gif) => {
  return {
    type: ACTIONS.FETCH_SMILE_SUCCEEDED,
    payload: {
      gif,
    }
  }
}

export const fetchSmile = () => {
  return dispatch => {
     fetch(`https://api.giphy.com/v1/gifs/random?api_key=${CONSTS.GIPHY_KEY}&tag=smile`)
      .then(resp => resp.json())
      .then(resp => {
        dispatch(fetchSmileSucceeded(resp.data.fixed_height_downsampled_url))
    })
  }
}
