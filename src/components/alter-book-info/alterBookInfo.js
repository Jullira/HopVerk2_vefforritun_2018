import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import api from '../../api';
import { Link } from 'react-router-dom';

import './alterBookInfo.css';

/* todo aðrar útgáfur af takka fyrir disabled, minni takka fyrir logout og "warning" takka */

export default class AlterBookInfo extends Component {


  render() {
    const { title, author, isbn13, description, pagecount, language} = this.props.data;
    const { categories } = this.props;
    console.log( categories);
    
    return (
      <div className="alter-book-info">
        <form className="alter-book-info-form">
          <li>
            <label for = "title">Titill</label>
            <input type = "textbox" name = "title" placeholder = {title} />
          </li>
          <li>
            <label for = "author">Höfundur</label>
            <input type = "textbox" name = "author" placeholder={author} />
          </li>
          <li>
            <label for = "isbn13">ISBN13</label>
            <input type = "textbox" name ="isbn13" placeholder={isbn13} />
          </li>
          <li>
            <label for = "category">Flokkur</label>
            <select ref="userInput" defaultplaceholder="" required>
              <option placeholder="" disabled>Flokkar</option> {
                categories.items.map((category) => {
                  return <option key={category.id}
                  placeholder={category.title}>{category.title}</option>;
                })
              }
            </select>
          </li>
          <li>
            <label for = "description">Lýsing</label>
            <textarea name = "description" placeholder = {description} rows = "10" />
          </li>
          <li>
            <label for = "pagecount">Blaðsíðufjöldi</label>
            <input type = "textbox" name = "pagecount" placeholder={pagecount} />
          </li>
          <li>
            <label for = "language">Tungumál</label>
            <input type = "textbox" name = "language" placeholder={language} />
          </li>
          <input type = "submit" className="submit" />

        </form>
      </div>
    );
  }

}

