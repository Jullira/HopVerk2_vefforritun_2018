
/**
 * Ef redux er notað skal skilgreina allar actions fyrir auth hér og
 * síðan í annari skrá fyrir aðra virkni.
 * Í async "thunks" ætti þá að gera vefþjónustuköll
 */

/* todo fleiri action */

/* todo async "thunk" fyrir tengingu við vefþjónustu */
import api from '../api';
import { request } from 'https';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGIN_RECEIVED = 'LOGIN_RECEIVED';
export const LOGIN_ERROR = 'LOGIN_ERROR'

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user,
    message: null,
  }
}

function receiveLogin(user, token) {
  return {
    type: LOGIN_RECEIVED,
    isFetching: false,
    isAuthenticated: true,
    user,
    token,
  }
}

export const loginUser = () => {
  return async (dispatch) => {
    dispatch(requestLogin());

    let login;
    try {
       //login = await log(username, password); // Kalla á post aðferð úr api hér :) - eigum eftir að gera hana
    } catch (e) {
      return dispatch(loginError(e));
    }

    console.log(login);
    const { result } = login;

    if (result && result.error) {
      dispatch(loginError(login.result.error));
    }

    if (result && result.user) {
      const { user, token } = login.result;

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);

      dispatch(receiveLogin(user, token));
    }
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isAuthenticated: false,
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    isFetching: false,
    isAuthenticated: false,
    message: error,
  }
}
