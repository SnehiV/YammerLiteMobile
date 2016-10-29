import React from 'react';
import App from './app';
import { connect } from 'react-redux';
import { logout, changeProfileImage } from '../session/session_actions';
import { requestFeed } from '../posts/post_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
  fetchFeed: (feedFilter) => dispatch(requestFeed(feedFilter)),
  changePhoto: (username, imageFile) => dispatch(changeProfileImage(username, imageFile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
