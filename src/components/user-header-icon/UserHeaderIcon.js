import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../button';
import './UserHeaderIcon.css';
import {requestLogout} from '../../actions/auth';

class UserHeaderIcon extends Component {
  logOutHandler = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(requestLogout());
   
}

    render() {
        const {image, username, name} = this.props.user;
        console.log(this.props);
        return(
            <div className = "userHeaderIcon">
              <p> {image} </p>  
              <Link to="/profile">{username}</Link>
              <Button onClick={this.logOutHandler}>Útskrá</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(UserHeaderIcon);