import { call, put, takeLatest, delay } from 'redux-saga/effects';
import * as api from '../api';


export default function* rootSaga() {
  yield takeLatest('FETCH_SMILE_STARTED', fetchSmiles);
  yield takeLatest('FETCH_TIMER_STARTED', handleTimer);
  // yield fork(watchElse);
};


function* handleTimer() {
  while (true) {
    yield delay(1000)
    yield put({
      type: 'FETCH_TIMER_INCREMENT'
    })
  }
}

function* fetchSmiles() {
    try {
    const gif = yield call(api.getSmile);
    yield put({
      type: 'FETCH_SMILE_SUCCEEDED',
      payload: {gif}
    });
  } catch (e) {
    yield put({
      type: 'FETCH_SMILE_FAILED',
    })
  }
}

// function* watchElse() {
//   yield console.log('rooooooooooooooootSaga watching something else');
// }
