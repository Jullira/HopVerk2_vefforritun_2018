import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';

import { Link } from 'react-router-dom';
import Heading from '../../components/heading';
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
        const { dispatch } = this.props;
        dispatch(registerUser(this.state.username, this.state.password, this.state.name));
    }

    render() {
        const { username, password, name} = this.state;
        const { isRegistered, message } = this.props;

        if (isRegistered) { 
            return (
                <div className = "register-page">
                    <Heading type="Registered"/>
                    <Link to="/login">Innskráning</Link>
                </div>
            );
        }

        return (
            <div className = "register-page">
                <Heading type="Register"/>
                {message && ( `${message.map(msg => <p>{msg.message}</p>)}`) }
                <form className = "register-form" onSubmit={this.handleSubmit}>
                    <div className="register-form-container">
                        <input type="text" placeholder="Notendanafn" name="username" value={username} required onChange={this.handleInputChange}/>
                        <input type="password" placeholder="Lykilorð" name="password" value={password} required onChange={this.handleInputChange}/>
                        <input type="text" placeholder="Nafn" name="name" value={name} required onChange={this.handleInputChange}/>
                        <button type="submit" className = "register-button">Nýskrá</button>
                    </div>
                </form>
                <Link to="/login">Innskráning</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isRegistered: state.auth.isRegistered,
    message: state.auth.message,
  }
}


export default connect(mapStateToProps)(Register);
