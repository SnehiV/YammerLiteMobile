import { PostConstants, receiveFeed, receivePost, receiveComment,
  receivePostEdit, receiveCommentEdit, receiveUpdateCount} from './post_actions';
import { fetchFeed, newPost, newComment,
  fetchNewPosts, submitPostEdit, submitCommentEdit } from './post_api_util';

const PostMiddleware = store => next => action => {
  let error = (errorData) => console.log(errorData.responseText);
  let success;
  switch (action.type) {
    case PostConstants.REQUEST_FEED:
      success = (feed) => store.dispatch(receiveFeed(feed));
      fetchFeed(action.feedFilter, success, error);
      break;
    case PostConstants.CREATE_POST:
      success = (post) => store.dispatch(receivePost(post));
      newPost(action.postParams, success, error);
      break;
    case PostConstants.CREATE_COMMENT:
      let postId = action.commentParams.postId;
      success = (comment) => store.dispatch(receiveComment(comment, postId));
      newComment(action.commentParams, success, error);
      break;
    case PostConstants.EDIT_POST:
      success = (updatedPost) => store.dispatch(receivePostEdit(updatedPost));
      submitPostEdit(action.postParams, success, error);
      break;
    case PostConstants.EDIT_COMMENT:

      success = (updatedPost) => {
        updatedPost.comments.forEach(comment => {
          if (comment._id === action.params.comment._id) {
            comment.commentUser = action.params.comment.commentUser;
          }
        });
        store.dispatch(receivePostEdit(updatedPost));
      };
      submitCommentEdit(action.params.commentParams, success, error);
      break;
    case PostConstants.CHECK_UPDATE_COUNT:
      success = (updates) => {
        let updateCount = 0;
        if (updates) {
          updateCount = updates.length;
        }
        store.dispatch(receiveUpdateCount(updateCount));
      };
      fetchFeed(action.feedFilter, success, error);
      break;
    default:
      return next(action);
  }
};

export default PostMiddleware;
