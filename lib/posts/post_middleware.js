import { PostConstants, requestFeed, receiveFeed } from './post_actions';
import { fetchFeed } from './post_api_util';

const PostMiddleware = store => next => action => {
  let error = (errorData) => console.log(errorData.responseText);
  switch (action.type) {
    case PostConstants.REQUEST_FEED:
      let success = (feed) => store.dispatch(receiveFeed(feed));
      fetchFeed(action.feedFilter, success, error);
      break;
    default:
      return next(action);
  }
};

export default PostMiddleware;
