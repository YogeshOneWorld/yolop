import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_TYPED_SOMETHING,
} from './type';

export const userLoginRequest = ({data, navigation}) => ({
  type: USER_LOGIN_REQUEST,
  data,
  navigation,
});

export const userLoginSuccess = data => ({
  type: USER_LOGIN_SUCCESS,
  data,
});

export const userLoginFailed = () => ({
  type: USER_LOGIN_FAILED,
});

export const typedSomething = (email, password) => ({
  type: USER_TYPED_SOMETHING,
  email,
  password,
});
