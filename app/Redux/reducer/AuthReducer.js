import {
  USER_LOGOUT,
  USER_LOGIN,
  AUTH_LOADING,
  USER_LOGGEDIN,
} from '../action/Types';

const initialState = {
  userToken: null,
  authLoading: false,
  setToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userToken: action.payload,
      };
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userToken: null,
      };
    case USER_LOGGEDIN:
      return {
        ...state,
        setToken: action.payload,
      };
    default:
      return state;
  }
};
