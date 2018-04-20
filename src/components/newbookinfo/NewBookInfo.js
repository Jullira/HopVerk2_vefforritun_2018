import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import api from '../../api';
import { Link } from 'react-router-dom';


import './NewBookInfo.css';

/* todo aðrar útgáfur af takka fyrir disabled, minni takka fyrir logout og "warning" takka */

export default class NewBookInfo extends Component {
  state = { title:'', author:'', isbn13:'',categorytitle:'', description:'', pagecount:'', language:''};

  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (e) => {
    const { title, author, isbn13, categorytitle, description, pagecount, language} = this.state;
    console.log(this.state);
    e.preventDefault();
    const url  = 'books/'+ this.props.id;
    const data = {
      title,
      author,
      isbn13,
      categorytitle,
      description,
      pagecount,
      language,
    }
    api.patch(url, data);
  }

  render() {
    const { title, author, isbn13, categorytitle, description, pagecount, language} = this.state;
    const { categories } = this.props;
    
    return (
      <div className="alter-book-info">
        <form className="alter-book-info-form" onSubmit = {this.handleSubmit}>
          <li>
            <label htmlFor = "title">Titill</label>
            <input type = "textbox" name = "title" value = {title}
            onChange={this.handleInputChange} />
          </li>
          <li>
            <label htmlFor = "author">Höfundur</label>
            <input type = "textbox" name = "author" value={author}
            onChange={this.handleInputChange} />
          </li>
          <li>
            <label htmlFor = "isbn13">ISBN13</label>
            <input type = "textbox" name ="isbn13" value={isbn13}
            onChange={this.handleInputChange} />
          </li>
          <li>
            <label htmlFor = "category">Flokkur</label>
            <select ref = "userInput" name = "categorytitle"  required onChange={this.handleInputChange} >
              <option value = "categorytitle" disabled>Flokkar</option> {
                categories.items.map((category) => {
                  return <option key = {category.id}
                  value = {category.title}                  
                  >{category.title}</option>;
                })
              }
            </select>
          </li>
          <li>
            <label htmlFor = "description">Lýsing</label>
            <textarea name = "description"
             value = {description}
             rows = "10"
             onChange={this.handleInputChange}
              />
          </li>
          <li>
            <label htmlFor = "pagecount">Blaðsíðufjöldi</label>
            <input type = "textbox" name = "pagecount" value={pagecount}
            onChange={this.handleInputChange} />
          </li>
          <li>
            <label htmlFor = "language">Tungumál</label>
            <input type = "textbox" name = "language" value={language}
            onChange={this.handleInputChange} />
          </li>
          <input type = "submit" className="submit" />

        </form>
      </div>
    );
  }

}

