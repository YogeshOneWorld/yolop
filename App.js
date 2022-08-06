import React, {useEffect} from 'react';
import StackNavigation from '@navigation/';
import SplashScreen from 'react-native-splash-screen';
import LoadingView from '@components/LoadingView';
import LoaderService from '@services/LoaderService';
// import PushController from '@services/PushController';
import {Provider} from 'react-redux';
import {store} from '@redux/configureStore';
import Snackbar from '@components/Snackbar';
import SnackBarService from '@services/SnackBarService';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StackNavigation />
      {/* <PushController /> */}
      <Snackbar
        ref={loaderRef => {
          SnackBarService.setSnackBarInstance(loaderRef);
        }}
      />
      <LoadingView
        ref={loaderRef => {
          LoaderService.setLoaderInstance(loaderRef);
        }}
      />
    </Provider>
  );
}
