import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth';

/* todo sækja actions frá ./actions */
import api from '../../api';
import Button from '../../components/button';
import './Login.css';


class Login extends Component {
  state = { username:'', password:  '' }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      this.setState({ [name]: value });
    }
  }

  /*
  handleLogout = (e) => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }*/

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(loginUser(this.state.username, this.state.password));
  }

  render() {
    const { username, password } = this.state;
    const { isFetching, isAuthenticated, message } = this.props;

    if (isFetching) {
      return (
        <p>Skrái inn <em>{username}</em>...</p>
      );
    }

    if (isAuthenticated) {
      return (
        <Redirect  to={`/`}/>
      );
    }
    
    return (
      <div className = "login-page">
      {message && (<p>{message}</p>) }
        <form className = "login-form" onSubmit={this.handleSubmit}>
          <div className="login-form-container">
            <input type="text" placeholder="Notendanafn" name="username" value={username} required onChange={this.handleInputChange} />
            <input type="password" placeholder="Lykilorð" name="password" value={password} required onChange={this.handleInputChange} />
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
  console.log(state);
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message,
  }
}


export default connect(mapStateToProps)(Login);
