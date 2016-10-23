import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './app/root';
var moment = require('moment');
import { fetchCurrentUser } from './session/session_api_util';

import { fetchFeed, fetchProfilePic } from './posts/post_api_util';

const renderApp = (response) => {
  let currentUser = typeof response === 'string' ? null : response;
  const preloadedState = {
    session: {currentUser: currentUser, errors: []},
    feed: []
  };
  const rootEl = document.getElementById('root');
  const store = window.store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, rootEl);
};

document.addEventListener("DOMContentLoaded", () => {
  window.moment = moment;
  window.fetchProfilePic = fetchProfilePic;
  window.fetchFeed = fetchFeed;
  fetchCurrentUser(renderApp, renderApp);
});
