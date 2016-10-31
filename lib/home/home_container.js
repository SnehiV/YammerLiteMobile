import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { requestFeed, createPost, createComment, editPost } from '../posts/post_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  feed: state.posts.feed
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: (feedFilter) => dispatch(requestFeed(feedFilter)),
  newPost: (postParams) => dispatch(createPost(postParams)),
  editPost: (postParams) => dispatch(editPost(postParams)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
