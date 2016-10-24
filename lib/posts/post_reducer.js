import { PostConstants } from './post_actions.js';
import merge from 'lodash/merge';

const PostReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case PostConstants.RECEIVE_FEED:
      newState = action.feed;
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
    default:
      return state;
  }
};

export default PostReducer;
