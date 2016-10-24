import { fetchFeed } from './post_api_util';

export const PostConstants = ({
  REQUEST_FEED: "REQUEST_FEED",
  RECEIVE_FEED: "RECEIVE_FEED",
  CREATE_POST: "CREATE_POST",
  RECEIVE_POST: "RECEIVE_POST",
  CREATE_COMMENT: "CREATE_COMMENT",
  RECEIVE_COMMENT: "RECEIVE_COMMENT",
});

export const requestFeed = (feedFilter) => ({
  type: PostConstants.REQUEST_FEED,
  feedFilter
});

export const receiveFeed = (feed) => ({
  type: PostConstants.RECEIVE_FEED,
  feed
});

export const createPost = (postParams) => ({
  type: PostConstants.CREATE_POST,
  postParams
});

export const receivePost = (post) => ({
  type: PostConstants.RECEIVE_POST,
  post
});

export const createComment = (commentParams) => ({
  type: PostConstants.CREATE_COMMENT,
  commentParams
});

export const receiveComment = (comment, postId) => ({
  type: PostConstants.RECEIVE_COMMENT,
  comment: comment,
  postId: postId
});
