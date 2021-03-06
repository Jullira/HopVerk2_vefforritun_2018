import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Search from '../search';
import UserHeaderIcon from '../user-header-icon';

import './Header.css';

class Header extends Component {
  state = { isAuthenticated:false, user:null };

  render() {
    const {isAuthenticated, user} = this.props.auth;
    return (
      <header className="header">
        <h1 className="header__heading"><Link to="/">Bókasafnið</Link></h1>
        <Search/>
        {isAuthenticated && user ? <UserHeaderIcon />
        : <Link to="/login">Innskráning</Link>}
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