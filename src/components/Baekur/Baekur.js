import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Baekur.css'


export default class Baekur extends Component {

    render() {
        return (
            <div className = "book-list">
                <h2>Bækur</h2>
                
                <h3>Hér skal vera listi af bókum</h3>
            </div>
        );
    }
}