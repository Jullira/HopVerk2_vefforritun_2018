import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListitemBook extends Component {

    render() {
        const {id, title, author} = this.props;

        return(
            <div className = "list-itemBook">
                <h3 className = "booktitle"> <Link to= {`/books/${id}`} > {title} </Link> </h3>
                <p className = "bookauthor"> Eftir {author} </p>
            </div>
        )
    }
}