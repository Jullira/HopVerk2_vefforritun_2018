import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ListPane.css'

export default class ListPane extends Component {

    render() {
        return(
            <div className = "list">
                <p> Generic listi sem er hægt að endurnýta </p>
            </div>
        )
    }
}