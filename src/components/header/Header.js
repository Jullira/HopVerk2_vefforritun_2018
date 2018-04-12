import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Button from '../button';
import Search from '../search';

import './Header.css';

class Header extends Component {

  onClick = (e) => {
    console.log('leita');
  }

  render() {
    return (
      <header className="header">
        <h1 className="header__heading"><Link to="/">Bókasafnið</Link></h1>
        <Search></Search>
        <Button onClick={this.onClick}>Leita</Button>
        
        <Link to="/login">Innskráning</Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Header);