import React, { Component } from 'react';

import './BookInfo.css';

export default class BookInfo extends Component {

  render() {
    const {title, author, isbn13, categorytitle, description, pagecount, language} = this.props.data;
    let pagecountOut, languageOut; 
    if (pagecount) { pagecountOut = <p> {pagecount} síður </p>; }
    if (language) { languageOut = <p> Tungumál: {language} </p>; }
  
    return (
      <div className="bookinfo">
        <h3>{title}</h3>
        <p> Eftir {author} </p>
        <p> ISBN13: {isbn13} </p>
        <p> {categorytitle} </p>
        <p> {description} </p>
        {pagecountOut}
        {languageOut}
      </div>
    );
  }

}

