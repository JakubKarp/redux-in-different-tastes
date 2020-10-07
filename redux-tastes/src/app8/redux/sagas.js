import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api';


export default function* rootSaga() {
  yield takeLatest('FETCH_SMILE_STARTED', watchFetchTasks);
  // yield fork(watchElse);
};

function* watchFetchTasks() {
  // while (true) {
    // yield take('FETCH_SMILE_STARTED')
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
  // }
}

// function* watchElse() {
//   yield console.log('rooooooooooooooootSaga watching something else');
// }
