import { PostConstants } from './post_actions.js';
import merge from 'lodash/merge';

const PostReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case PostConstants.RECEIVE_FEED:
      if (action.feed) {
        newState = action.feed;
      } else {
        newState = [];
      }
      return Object.freeze(newState);

    case PostConstants.RECEIVE_POST:
      newState = merge([], state);
      newState.unshift(action.post);
      return Object.freeze(newState);

    case PostConstants.RECEIVE_COMMENT:
      newState = state.map(post => {
        if (post._id === action.postId){
          post.comments.push(action.comment);
        }
        return post;
      });
      return Object.freeze(newState);

    case PostConstants.RECEIVE_POST_EDIT:
      newState = state.map(post => {
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

    default:
      return state;
  }
};

export default PostReducer;
