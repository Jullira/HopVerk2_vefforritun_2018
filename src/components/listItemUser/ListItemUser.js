import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListitemUser extends Component {

    render() {
        const {id, username} = this.props;

        return(
            <div className = "list-itemUser">
                <h3 className = "username"> <Link to= {`/users/${id}`} > {username} </Link> </h3>
            </div>
        )
    }
}