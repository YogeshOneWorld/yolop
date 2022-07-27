import {combineReducers} from 'redux';
import loginReducer from '@screens/LoginScreen/reducer';

const appReducer = combineReducers({
  loginReducer,
  //   signUPReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
