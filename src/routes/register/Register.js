import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/auth';

/* todo sækja actions frá ./actions */
import api from '../../api';
import Button from '../../components/button';
import './Register.css';

class Register extends Component {
    state = { username:'', password:  '', name: '', register:null};

    handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name) {
            this.setState({ [name]: value });
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        //const register = await api.register(this.state.username, this.state.password, this.state.name); // virkar, kann ekki að rerouta og ves 
        const { dispatch } = this.props;
        dispatch(registerUser(this.state.username, this.state.password, this.state.name));
    }

    render() {
        const { username, password, name} = this.state;
        const { isFetching, isRegistered, message } = this.props;

        console.log(isRegistered);

        return (
            <div className = "register-page">
                  {message && ( `${message.map(msg => <p>{msg.message}</p>)}`) }
                <form className = "register-form" onSubmit={this.handleSubmit}>
                    <div className="register-form-container">
                        <input type="text" placeholder="Notendanafn" name="username" value={username} required onChange={this.handleInputChange}/>
                        <input type="password" placeholder="Lykilorð" name="password" value={password} required onChange={this.handleInputChange}/>
                        <input type="text" placeholder="Nafn" name="name" value={name} required onChange={this.handleInputChange}/>
                        <button type="submit" className = "register-button">Nýskrá</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isRegistered,
    message: state.auth.message,
  }
}


export default connect(mapStateToProps)(Register);
