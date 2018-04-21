import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';

export default class ListItemMyUserRedBooks extends Component {

    deleteReview = (e) => {
        // this.prps.id;
       // handle delete        
    }


    render() {
        const {book_id, title, rating, review} = this.props;

        return(
            <div className = "list-itemBook">
                <h3 className = "booktitle"> <Link to= {`/books/${book_id}`} > {title} </Link> </h3>
                <p className = "bookrating"> Einkunn: {rating}</p>
                {(review) ? <p className = "bookreview"> Um bókina: {review} </p> : null }
                <Button onClick={this.deleteReview} className="deleteButton"> Eyða </Button>
            </div>
        )
    }
}