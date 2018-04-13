import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Heading.css';

export default class Heading extends Component {
  
  render() {
    const {type} = this.props;

    let heading; 
    switch (type) {
      case "BookList": 
        heading = "Bækur";
        break;
      // Fleiri cases 
    }

    return (
      <h2 className={`heading-${type}`} > {heading} </h2>
    )
  }
}