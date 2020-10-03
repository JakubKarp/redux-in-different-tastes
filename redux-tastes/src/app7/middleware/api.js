import CONSTS from '../../consts/consts';

export const CALL_API = 'CALL_API';

const makeCall = async (endpoint) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${CONSTS.GIPHY_KEY}&tag=${endpoint}`;

  return await fetch(url)
    .then(resp => resp.json())
    .then(resp => resp.data?.fixed_height_downsampled_url)
}


const apiMiddleware = store => next => action => {
  const callApi = action[CALL_API] ;
  if (typeof callApi === 'undefined') {
    return next(action);
  }
  const [ requestSrartedType, succeesType, failureType ] = callApi.types;
  next({ type: requestSrartedType })

  return makeCall(callApi.endpoint).then(
    response =>
      next({
        type: succeesType,
        payload: response
      }),
    error =>
      next({
        type: failureType,
        error: error.message
      })
  )
}

export default apiMiddleware;
