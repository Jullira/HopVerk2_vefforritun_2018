import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Search.css';
import api from '../../api';
import ListPane from '../list-pane';
import Heading from '../heading';
import Button from '../button';

export default class Search extends Component {

    
  onClick = (e) => {
    
  }


    render() {
        return (
            <div className = "search">
                <input type = "text" className="searchBox" />
                <Button onClick={this.onClick}>Leita</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}