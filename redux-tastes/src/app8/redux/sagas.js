import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(watchFetchTasks);
  yield fork(watchElse);
  
};

function* watchFetchTasks() {
  yield console.log('rooooooooooooooootSaga watching');
}

function* watchElse() {
  yield console.log('rooooooooooooooootSaga watching something else');
}
