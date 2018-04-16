import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Heading.css';

export default class Heading extends Component {
  
  render() {
    return (
      <h1>{this.props.location.path}</h1>
    );
  }
}