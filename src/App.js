import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, NavLink, Link, Switch, withRouter } from 'react-router-dom'

import UserRoute from './components/user-route';
import Header from './components/header';

import Books from './routes/books';
import Home from './routes/home';
import Login from './routes/login';
import Profile from './routes/profile';
import NotFound from './routes/not-found';
import Register from './routes/register';

import './App.css';

class App extends Component {
  
  
  render() {
    const { isAuthenticated } = this.props; // virkar ekki idk ??? 
    //const isAuthenticated = false; /* vita hvort notandi sé innskráður */
    console.log('isAuthenticated   ', isAuthenticated)
    return (
      <main className="main">
        <Helmet defaultTitle="Bókasafnið" titleTemplate="%s – Bókasafnið" />

        <Header />

        <div className="main__content">
          <Switch location={this.props.location}>
            <Route path="/" exact isAuthenticated={isAuthenticated} component={Home} />
            <Route  path="/login" exact component={Login} />
            <UserRoute path="/profile" isAuthenticated={isAuthenticated} component={Profile} />
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
  console.log("state.auth.isAuthenticated---", state.auth.isAuthenticated);
  isAuthenticated: state.auth.isAuthenticated
}

export default withRouter(connect(mapStateToProps)(App));
