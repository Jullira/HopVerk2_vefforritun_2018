import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Books.css'


export default class Books extends Component {

    render() {
        return (
            <div className = "book-list">
                <h2>Bækur</h2>
                
                <h3>Hér skal vera listi af bókum</h3>
            </div>
        );
    }
}