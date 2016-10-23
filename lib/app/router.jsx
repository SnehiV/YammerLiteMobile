import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import AppContainer from './app_container';
import LoginContainer from '../session/login_container';
import HomeContainer from '../home/home_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace){
    debugger
    if (this.props.currentUser){
      replace("/home");
    }
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRedirect to="/login" />
          <Route path="/login" component={LoginContainer} onEnter={this._redirectIfLoggedIn} />
          <Route path="/home" component={HomeContainer} onEnter={this._ensureLoggedIn} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
