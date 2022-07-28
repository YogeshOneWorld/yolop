/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from '@redux/configureStore';

const RNRedux = () => (
  <StoreProvider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
