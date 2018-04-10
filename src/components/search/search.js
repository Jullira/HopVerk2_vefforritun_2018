import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class search extends Component {

    render() {
        return (
            <input type = "text" className = "search">
                leita að bók
            </input>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(search);