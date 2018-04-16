import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Heading.css';

export default class Heading extends Component {
  
  render() {
    const {type, search} = this.props;
    let heading; 
    switch (type) {
      case "Books": 
        heading = "Bækur";
        break;
      case "Search":
        const searchString = search.split("=");
        heading = "Bókaleit: " + searchString[1];
        break;

      // Fleiri cases 
    }

    return (
<<<<<<< HEAD
      <h1>{this.props.location.path}</h1>
    );
=======
      <h2 className={`heading-${type}`} > {heading} </h2>
    )
>>>>>>> fe8a717d70c608a2a931e82e4cd0986642500a81
  }
}