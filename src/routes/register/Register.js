import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Register.css';

export default class Register extends Component {

    render() {
        return (
            <div className = "register-page">
                <form className = "register-form">
                    <div className="register-form-container">
                        <input type="text" placeholder="Notendanafn" name="name" required />
                        <input type="password" placeholder="Lykilorð" name="psw" required />
                        <input type="text" placeholder="Nafn" name="name" required />
                        <button type="submit" className = "register-button">Nýskrá</button>
                    </div>
                </form>
            </div>
        );
    }
}