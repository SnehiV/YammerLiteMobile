import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { test, loginUser, logoutUser } from './util/session_api_util';


document.addEventListener("DOMContentLoaded", () => {
  window.test = test;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  const preloadedState = {session: {currentUser: null, errors: []}};
  const rootEl = document.getElementById('root');
  const store = window.store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, rootEl);
});
