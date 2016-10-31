import { PostConstants } from './post_actions.js';
import merge from 'lodash/merge';

const PostReducer = (state = {feed: [], updates: 0, timestamp: Date.now()}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case PostConstants.RECEIVE_FEED:
      if (action.feed) {
        newState.feed = action.feed;
      } else {
        newState.feed = [];
      }
      newState.updates = 0;
      return Object.freeze(newState);

    case PostConstants.RECEIVE_POST:
      newState.feed.unshift(action.post);
      return Object.freeze(newState);

    case PostConstants.RECEIVE_COMMENT:
      newState.feed = state.feed.map(post => {
        if (post._id === action.postId){
          post.comments.push(action.comment);
        }
        return post;
      });
      return Object.freeze(newState);

    case PostConstants.RECEIVE_POST_EDIT:
      newState.feed = state.feed.map(post => {
        if (post._id === action.updatedPost._id) {
          action.updatedPost.postUser = post.postUser;
          let commentLength = post.comments.length;
          for (var i = 0; i < commentLength; i++) {
            action.updatedPost.comments[i].commentUser = post.comments[i].commentUser;
          }
          return action.updatedPost;
        } else { return post; }
      });
      return Object.freeze(newState);

    case PostConstants.RECEIVE_UPDATE_COUNT:
      newState.updates = action.updateCount;
      newState.timestamp = Date.now();
      return Object.freeze(newState);
    default:
      return state;
  }
};

export default PostReducer;
