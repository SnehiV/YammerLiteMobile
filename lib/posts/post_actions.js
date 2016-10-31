import { fetchFeed } from './post_api_util';

export const PostConstants = ({
  REQUEST_FEED: "REQUEST_FEED",
  RECEIVE_FEED: "RECEIVE_FEED",
  CREATE_POST: "CREATE_POST",
  RECEIVE_POST: "RECEIVE_POST",
  CREATE_COMMENT: "CREATE_COMMENT",
  RECEIVE_COMMENT: "RECEIVE_COMMENT",
  EDIT_POST: "EDIT_POST",
  RECEIVE_POST_EDIT: "RECEIVE_POST_EDIT",
  EDIT_COMMENT: "EDIT_COMMENT",
  RECEIVE_COMMENT_EDIT: "RECEIVE_COMMENT_EDIT",
  CHECK_UPDATE_COUNT: "CHECK_UPDATE_COUNT",
  RECEIVE_UPDATE_COUNT: "RECEIVE_UPDATE_COUNT"
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

export const editPost = (postParams) => ({
  type: PostConstants.EDIT_POST,
  postParams
});

export const receivePostEdit = (updatedPost) => ({
  type: PostConstants.RECEIVE_POST_EDIT,
  updatedPost
});

export const editComment = (params) => ({
  type: PostConstants.EDIT_COMMENT,
  params
});

export const receiveCommentEdit = (updatedComment) => ({
  type: PostConstants.RECEIVE_COMMENT_EDIT,
  updatedComment
});

export const checkUpdateCount = (feedFilter) => ({
  type: PostConstants.CHECK_UPDATE_COUNT,
  feedFilter
});

export const receiveUpdateCount = (updateCount) => ({
  type: PostConstants.RECEIVE_UPDATE_COUNT,
  updateCount
});
