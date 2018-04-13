import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookList extends Component {

    render() {
        if(this.props.location.search !== ""){
            console.log(this.props.location.search);
        }
        return (
            <div>
            BookList {this.props.location.search}
            </div>
        );
    }
}