import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ViewBook extends Component {

    render() {
        console.log(this.props.location.pathname);
        return (
            <div>
            ViewBook 
            </div>
        );
    }
}