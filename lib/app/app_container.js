import React from 'react';
import App from './app';
import { connect } from 'react-redux';
import { logout, changeProfileImage } from '../session/session_actions';
import { requestFeed, checkUpdateCount } from '../posts/post_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  timestamp: state.posts.timestamp,
  updates: state.posts.updates
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
  fetchFeed: (feedFilter) => dispatch(requestFeed(feedFilter)),
  changePhoto: (username, imageFile) => dispatch(changeProfileImage(username, imageFile)),
  fetchUpdateCount: (feedFilter) => dispatch(checkUpdateCount(feedFilter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
