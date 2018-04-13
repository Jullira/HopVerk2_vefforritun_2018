import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, NavLink, Link, Switch, withRouter } from 'react-router-dom'

import UserRoute from './components/user-route';
import Header from './components/header';

import Home from './routes/home';
import Login from './routes/login';
import Profile from './routes/profile';
import Books from './routes/books';
import NotFound from './routes/not-found';
import Register from './routes/register';

import './App.css';

class App extends Component {

  render() {
    const authenticated = false; /* vita hvort notandi sé innskráður */

    return (
      <main className="main">
        <Helmet defaultTitle="Bókasafnið" titleTemplate="%s – Bókasafnið" />

        <Header />

        <div className="main__content">
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route  path="/login" exact component={Login} />
            <UserRoute path="/profile" authenticated={authenticated} component={Profile} />
            <Route path ="/books" component ={Books} />
            <Route  path = "/register" exact component = {Register} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </main>
    );
  }
}

const mapStateToProps = (state) => {
  /* todo stilla redux ef það er notað */
}

export default withRouter(connect(mapStateToProps)(App));
