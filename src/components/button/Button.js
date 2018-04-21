import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default class Button extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
  }

  static defaultProps = {
    className: '',
    onClick: () => {},
  }

  render() {
    const { children, className, onClick } = this.props;

    const classes = `button ${className}`

    return (
      <button onClick={onClick} className={classes}>{children}</button>
    );
  }

}

