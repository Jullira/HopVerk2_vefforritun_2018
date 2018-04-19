import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import './alterBookInfo.css';

/* todo aðrar útgáfur af takka fyrir disabled, minni takka fyrir logout og "warning" takka */

export default class AlterBookInfo extends Component {

  render() {
    const {title, author, isbn13, categorytitle, description, pagecount, language} = this.props.data;
    let pagecountOut, languageOut; 
    let options = { categorytitle };
    // if (pagecount) { pagecountOut = <p> {pagecount} síður </p>; }
    // if (language) { languageOut = <p> Tungumál: {language} </p>; }
  
    return (
      <div className="alter-book-info">
        <form className="alter-book-info-form">
          <li>
            <label for = "title">Titill</label>
            <input type = "textbox" name = "title" value = {title}></input>
          </li>
          <li>
            <label for = "author">Höfundur</label>
            <input type = "textbox" name = "author" value={author}></input>
          </li>
          <li>
            <label for = "isbn13">ISBN13</label>
            <input type = "textbox" name ="isbn13" value={isbn13}></input>
          </li>
          <li>
            <label for = "category">Flokkur</label>
            <select 
              name ="category" 
              options= {options} 
              value={categorytitle} 
              ref={(ref) => { this.select = ref; }}> 
            </select>
          </li>
          <li>
            <label for = "description">Lýsing</label>
            <textarea name = "description" value = {description}  />
            </li>
          <li>
            <label for = "pagecount">Blaðsíðufjöldi</label>
            <input type = "textbox" name = "pagecount" value={pagecount}></input>
            </li>
          <li>
            <label for = "language">Tungumál</label>
            <input type = "textbox" name = "language" value={language}></input>
            </li>
          <input type = "submit" class="submit"></input>

        </form>
      </div>
    );
  }

}

