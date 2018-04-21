import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../button';
import './UserHeaderIcon.css';
import { requestLogout } from '../../actions/auth';

class UserHeaderIcon extends Component {
  logOutHandler = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(requestLogout());
   
}

    render() {
        const { name} = this.props.user;
        let { image } = this.props.user;
        
        if (image ) {
          const img_url_parts = image.split('upload');
          image = `${img_url_parts[0]}upload/w_400,h_400,c_crop,g_face,r_max/w_200${img_url_parts[1]}`
        }
        else {
          image = '/profile.jpg';
        }
        return(
            <div className = "userHeaderIcon">
              <img className="user_img" src={image} alt="profile"/>  
              <Link to="/profile">{name}</Link>
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