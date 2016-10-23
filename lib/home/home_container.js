import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { requestFeed } from '../posts/post_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  feed: state.feed
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: (feedFilter) => dispatch(requestFeed(feedFilter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
