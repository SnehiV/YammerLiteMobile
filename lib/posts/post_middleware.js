import { PostConstants, requestFeed, receiveFeed,
        createPost, receivePost, createComment,
      receiveComment, refresh} from './post_actions';
import { fetchFeed, newPost, newComment, fetchNewPosts } from './post_api_util';

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
    default:
      return next(action);
  }
};

export default PostMiddleware;
