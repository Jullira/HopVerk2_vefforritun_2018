import React, { Component } from 'react';

import './BookReview.css';
import Button from '../button';
import api from '../../api';

export default class BookReview extends Component {
  state = {deleted: []}; 
 
deleteReview = (e) => {
  e.preventDefault();
  const url = 'users/me/read';
  const {id} = this.props;
  const body = {
    id: parseInt(id,10)
  };
  api.apiDelete(url, body);
  this.setState({deleted: this.state.deleted.push(id)})
}

render() {
  const {data, id} = this.props;

  let myReadBooks = [];

  data.items.map((r)  => {
    if (id===r.book_id) {
      myReadBooks.push(r);
    }
    return null;
  });
          
  return (    
    <div className="allBookReviews">
      {(myReadBooks.length > 0) ? <h2> Lesin bók </h2> : null }
      {(myReadBooks.length > 0) 
        ? myReadBooks.map((rev, i) => {
            return (
              <div key={i} className="bookReview">
                <p> Einkunn {rev.rating} </p>
                <p> {rev.review} </p>
                <Button onClick={this.deleteReview} className="deleteButton"> Eyða lestri </Button>
              </div>
            )
        })
        :null
      }
    </div>
  );
  }

}

