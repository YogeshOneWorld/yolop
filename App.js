import React, {useEffect} from 'react';
import StackNavigation from '@navigation/';
import SplashScreen from 'react-native-splash-screen';
import PushController from '@services/PushController';
import NavigationService from '@services/NavigationService';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <StackNavigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <PushController />
    </>
  );
}
