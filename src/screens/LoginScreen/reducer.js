import {
  USER_LOGIN_FAILED,
  USER_TYPED_SOMETHING,
  USER_LOGIN_SUCCESS,
} from './type';

const initialState = {
  success: false,
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        userData: data,
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        success: false,
      };
    }
    case USER_TYPED_SOMETHING: {
      const {email, password} = action;
      return {
        ...state,
        success: email && password,
      };
    }
    default:
      return state;
  }
};
