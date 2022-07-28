import {all} from 'redux-saga/effects';
import {loginSaga} from '@screens/LoginScreen/saga';

export function* rootSaga() {
  yield all([
    loginSaga(),
    // saveBarCodeSaga(),
  ]);
}
