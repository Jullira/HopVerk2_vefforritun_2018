import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class ListItemUserReadBooks extends Component {

    render() {
        const {book_id, title, rating, review} = this.props;

        return(
            <div className = "list-itemBook">
                <h3 className = "booktitle"> <Link to= {`/books/${book_id}`} > {title} </Link> </h3>
                <h3 className = "bookrating"> Einkunn: {rating}. {review} </h3>
            </div>
        )
    }
}