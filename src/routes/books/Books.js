import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Link, Switch } from 'react-router-dom'

import UserRoute from '../../components/user-route';

import BookList from './routes/book-list';
import ViewBook from './routes/view-book';
import AlterBook from './routes/alter-book';

import NotFound from '../not-found';

import './Books.css';

export default class Books extends Component {
    
    render() {
        const authenticated = false; 

        const { path } = this.props.match;
                
        return (
            <Switch>
                <Route exact path={`${path}`} component={BookList} />
                <Route exact path={`${path}:search`} component={BookList} />
                <Route exact path={`${path}/new`} component={AlterBook} />
                <Route path={`${path}/:id/edit`} component={AlterBook} />
                <Route path={`${path}/:id`} component={ViewBook} />
                {/* <UserRoute path={`${path}/new`} authenticated={authenticated} component={AlterBook} /> */}
                {/* <UserRoute path={`${path}/:id/edit`} authenticated={authenticated} component={AlterBook} /> */}
                {/* <UserRoute path={`${path}/:id`} authenticated={authenticated} component={ViewBook} /> */}
                <Route component={NotFound} />
            </Switch>
        );
    }
}