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
    const { title, author, isbn13, categorytitle,description, pagecount, language} = this.props.data;
    const { categories } = this.props;
    console.log(categories);
    
    return (
      <div className="alter-book-info">
        <form className="alter-book-info-form">
          <li>
            <label for = "title">Titill</label>
            <input type = "textbox" name = "title" value = {title}
            onChange = {(e) => this.setState({ title: e.target.value})} />
          </li>
          <li>
            <label for = "author">Höfundur</label>
            <input type = "textbox" name = "author" value={author}
            onChange = {(e) => this.setState({ author: e.target.value})} />
          </li>
          <li>
            <label for = "isbn13">ISBN13</label>
            <input type = "textbox" name ="isbn13" value={isbn13}
            onChange = {(e) => this.setState({ isbn13: e.target.value})} />
          </li>
          <li>
            <label for = "category">Flokkur</label>
            <select ref="userInput" defaultvalue="" required>
              <option value="" disabled>Flokkar</option> {
                categories.items.map((category) => {
                  return <option key={category.id}
                  value={category.title}
                  onChange = {(e) => this.setState({categorytitle: e.target.value})}
                  >{category.title}</option>;
                })
              }
            </select>
          </li>
          <li>
            <label for = "description">Lýsing</label>
            <textarea name = "description"
             value = {description}
             rows = "10"
             onChange = {(e) => this.setState({ description: e.target.value})}
              />
          </li>
          <li>
            <label for = "pagecount">Blaðsíðufjöldi</label>
            <input type = "textbox" name = "pagecount" value={pagecount}
            onChange = {(e) => this.setState({ pagecount: e.target.value})} />
          </li>
          <li>
            <label for = "language">Tungumál</label>
            <input type = "textbox" name = "language" value={language}
            onChange = {(e) => this.setState({ language: e.target.value})} />
          </li>
          <input type = "submit" className="submit" />

        </form>
      </div>
    );
  }

}

