import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BookReview.css';

export default class BookReview extends Component {
 
state = { bookdata: null, readdata:null, loading: true, error: false};

render() {/*
  const {data, id} = this.props;
  data.items.map((r)  => {
    if (id===r.book_id) { 
      return(
        <div className="reviewTab">


        </div>
      )
    
    
    }
  }
*/
    
  
    return (


      <div className="bookreview">
        Eftir að útfæra bookreview
      </div>
    );
  }

}

