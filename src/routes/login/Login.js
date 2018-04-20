import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginUser } from '../../actions/auth';

/* todo sækja actions frá ./actions */

import './Login.css';

class Login extends Component {

  handleSubmit = async (e) => {
    console.log(this.props)
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(loginUser());
    console.log(e)
  }

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return (
        <div>
          Fething data
        </div>
      );
    }

    return (
      <div className = "login-page">
        <form className = "login-form" onSubmit={this.handleSubmit}>
          <div className="login-form-container">
            <input type="text" placeholder="Notendanafn" name="name" required />
            <input type="password" placeholder="Lykilorð" name="psw" required />
            <button type="submit" className = "login-button" >Skrá inn</button>
          </div>
        </form>
        <div className = "register-link">
          <NavLink to = "/register">Nýskráning</NavLink>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
  }
}

export default connect(mapStateToProps)(Login);
