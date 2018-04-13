import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class ListitemBook extends Component {

    render() {
        const {id, title, author} = this.props;

        return(
            <div className = "list-itemBook">
                <p className = "booktitle"> <Link to= {`/books/${id}`} > {title} </Link> </p>
                <p className = "bookauthor"> Eftir {author} </p>
            </div>
        )
    }
}