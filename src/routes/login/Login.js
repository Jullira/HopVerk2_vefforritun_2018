import React, { Component } from 'react';
import { connect } from 'react-redux';

/* todo sækja actions frá ./actions */

import './Login.css';

class Login extends Component {

  render() {
    return (
      <div className = "login-page">
        <form className = "login-form">
          <div className="login-form-container">
            <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter username" name="name" required />

            <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" className = "login-button">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
          </div>
        </form>
      </div>
    );
  }
}

/* todo tengja við redux */

export default Login;
