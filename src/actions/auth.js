
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
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_RECEIVED = 'REGISTER_RECEIVED';
export const REGISTER_ERROR = 'REGISTER_ERROR';

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

export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch(requestLogin());

    let login;
    try {
      login = await api.login(username, password); // Kalla á post aðferð úr api hér :) - eigum eftir að gera hana
    } catch (e) {
      return dispatch(loginError(e));
    }

    console.log(login);
    
    if (login && login.error) {
      dispatch(loginError(login.error));
    }

    if (login && login.user) {
      const { user, token } = login;

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

function registerError(errors) {
  return {
    type: REGISTER_ERROR,
    isFetching: false,
    isRegistered: false,
    message: errors,
  }
}

function receiveRegister(user) {
  return {
    type: REGISTER_RECEIVED,
    isFetching: false,
    isRegistered: true,
  }
}

export const registerUser = (username, password, name) => {
  return async (dispatch) => {
    let register;
    try {
      register = await api.register(username, password, password); // Kalla á post aðferð úr api hér :) - eigum eftir að gera hana
    } catch (e) {
      return dispatch(registerError(e));
    }
    
    if (register && register.errors ) {
      console.log(register);
      dispatch(registerError(register.errors));
    }

    if (register && register.user) {
      const {user} = register;
      dispatch(receiveRegister(user));
    }
  }
}
