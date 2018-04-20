import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Link, Switch, withRouter } from 'react-router-dom'

import BookList from './routes/book-list';
import ViewBook from './routes/view-book';
import AlterBook from './routes/alter-book';
import UserRoute from '../../components/user-route';

import NotFound from '../not-found';

import './Books.css';

class Books extends Component {
    state = { isAuthenticated: null};

    componentWillReceiveProps(nextProps) {
    const { isAuthenticated} = nextProps;
    this.setState({ isAuthenticated});
  }
    
    render() {
        const authenticated = this.props.isAuthenticated;

        const { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}`} component={BookList} />
                <Route exact path={`${path}:search`} component={BookList} />
                <UserRoute path={`${path}/new`} authenticated={authenticated} component={AlterBook} /> */}
                <UserRoute path={`${path}/:id/edit`} authenticated={authenticated} component={AlterBook} /> */}
                <UserRoute path={`${path}/:id`} authenticated={authenticated} component={ViewBook} /> */}
                <Route component={NotFound} />
            </Switch>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default withRouter(connect(mapStateToProps)(Books));