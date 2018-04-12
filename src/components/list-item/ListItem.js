import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ListItem.css'

export default class ListItem extends Component {

    render() {
        return(
            <div className = "list-item">
                <p> Generic list item - eigum mögulega eftir að gera: ListItemBook, ListItemReadBook, 
                    ListItemMyReadBook, ListItemUser </p>
            </div>
        )
    }
}