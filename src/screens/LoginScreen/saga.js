import {takeLatest, call, put} from 'redux-saga/effects';
import {USER_LOGIN_REQUEST} from './type';
import SnackBarService from '@services/SnackBarService';
import LoaderService from '@services/LoaderService';

function* loginRequest(email, password) {
  try {
    console.log('email saga success', email, password);
  } catch (error) {
    LoaderService.hide();
    SnackBarService.show('error');
    console.log(error);
  }
}

export function* loginSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, loginRequest);
}
