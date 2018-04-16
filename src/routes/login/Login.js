import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/* todo sækja actions frá ./actions */

import './Login.css';

class Login extends Component {

  render() {
    return (
      <div className = "login-page">
        <form className = "login-form">
          <div className="login-form-container">
            <input type="text" placeholder="Notendanafn" name="name" required />
            <input type="password" placeholder="Lykilorð" name="psw" required />
            <button type="submit" className = "login-button">Skrá inn</button>
          </div>
        </form>
        <div className = "register-link">
          <NavLink to = "/register">Nýskráning</NavLink>
        </div>  
      </div>
    );
  }
}

/* todo tengja við redux */

export default Login;
