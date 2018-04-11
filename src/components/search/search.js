import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

export default class Search extends Component {

    render() {
        return (
            <input type = "text" className = "Search"/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}