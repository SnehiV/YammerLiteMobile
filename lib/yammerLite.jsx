import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './app/root';
var moment = require('moment');
import { fetchCurrentUser } from './session/session_api_util';

import { editPost, fetchFeed } from './posts/post_api_util';

const renderApp = (response) => {
  let currentUser = typeof response === 'string' ? null : response;
  const preloadedState = {
    session: {currentUser: currentUser, errors: []},
    posts: {feed: [], updates: 0, timestamp: Date.now()}
  };
  window.moment = moment;
  window.editPost = editPost;
  window.fetchFeed = fetchFeed;
  const rootEl = document.getElementById('root');
  const store = window.store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, rootEl);
};

document.addEventListener("DOMContentLoaded", () => {
  fetchCurrentUser(renderApp, renderApp);
});
