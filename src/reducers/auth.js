import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_RECEIVED,
  LOGIN_ERROR,
  REGISTER_RECEIVED,
  REGISTER_ERROR

} from '../actions/auth';

const user = JSON.parse(localStorage.getItem('user') || 'null');
const token = localStorage.getItem('token') || null;


const initialState = {
  isFetching: false,
  isAuthenticated: !!token,
  message: null,
  user,
  token,
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
        user: action.user,
        token: action.token
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
      case REGISTER_RECEIVED:
      return{
        ...state,
        isFetching: action.isFetching,
        isRegistered: action.isRegistered,
      }
      case REGISTER_ERROR:
      return{
        ...state,
        isFetching: action.isFetching,
        isRegistered: action.isRegistered,
        message: action.message
      }
    default:
      return state;
  }
};