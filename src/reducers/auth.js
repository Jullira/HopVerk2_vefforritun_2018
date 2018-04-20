import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_RECEIVED,
  LOGIN_ERROR
  /* todo fleiri actions */
} from '../actions/auth';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  message: null,
  user: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        message: action.message,
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      }
    case LOGIN_RECEIVED:
      return{
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.user,
        token: action.token,
      }
      case LOGIN_ERROR:
      return{
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        message: action.message
      }
    default:
      return state;
  }
};