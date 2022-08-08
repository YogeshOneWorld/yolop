import {takeLatest, call, put} from 'redux-saga/effects';
import {USER_LOGIN_REQUEST} from './type';
import LoaderService from '@services/LoaderService';
import {navigateTo} from '@utils/navigateTo';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import SnackBarService from '@services/SnackBarService';

const sleep = sec => {
  return new Promise(resolve => setTimeout(resolve, sec * 500));
};

function* loginRequest({data, navigation}) {
  try {
    yield sleep(0.1);
    yield LoaderService.hide();
    if (data.email && data.password) {
      // navigateTo(navigation, NAVIGATION_SCREENS.NOTIFICATION, 1, true);
      yield navigateTo(navigation, NAVIGATION_SCREENS.DRAWERSCREEN);
      yield SnackBarService.show('Success');
    } else {
      SnackBarService.show('fail');
    }
  } catch (error) {
    LoaderService.hide();
    console.log(error);
    SnackBarService.show('failed');
  }
}

export function* loginSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, loginRequest);
}
