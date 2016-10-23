import { PostConstants } from './post_actions.js';
import merge from 'lodash/merge';

const PostReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case PostConstants.RECEIVE_FEED:
      newState = action.feed;
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
