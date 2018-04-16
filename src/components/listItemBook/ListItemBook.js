<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ListItemBook.css';

export default class ListItemBook extends Component {

    render() {
        
    }
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
>>>>>>> fe8a717d70c608a2a931e82e4cd0986642500a81
}