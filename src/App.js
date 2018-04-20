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
import UserList from './components/user-list/UserList';

class App extends Component {
  state = { isAuthenticated: null, isRegistered:null };

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated, isRegistered} = nextProps;
    this.setState({ isAuthenticated, isRegistered });
  }
  
  render() {
    const { isAuthenticated, isRegistered} = this.state; // virkar ekki idk ??? 
    console.log("app -- auth ", isAuthenticated);
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
            <Route path="/users" exact component={UserList} />
            <Route path ="/books" component ={Books} />
            <Route  path = "/register" exact isRegistered={isRegistered} component = {Register} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </main>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state.auth.isRegistered---", state.auth.isRegistered);
  return{
    isAuthenticated: state.auth.isAuthenticated,
    isRegistered: state.auth.isRegistered,
  }
}

export default withRouter(connect(mapStateToProps)(App));
