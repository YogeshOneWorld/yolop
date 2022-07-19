/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import configureStore from './src/store';

const store = configureStore()

const RNRedux = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);
