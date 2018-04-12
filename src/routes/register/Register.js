import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Register extends Component {

    render() {
        return (
            <div className = "register-page">
                <form className = "register-form">
                    <div className="register-form-container">
                        <label for="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter username" name="name" required />

                        <label for="psw"><b>Password</b></label>
                             <input type="password" placeholder="Enter Password" name="psw" required />

                        <label for="name"><b>Nafn</b></label>
                             <input type="text" placeholder="Enter name" name="name" required />

                        <button type="submit" className = "register-button">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}