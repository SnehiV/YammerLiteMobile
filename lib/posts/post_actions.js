import { fetchFeed } from './post_api_util';

export const PostConstants = ({
  REQUEST_FEED: "REQUEST_FEED",
  RECEIVE_FEED: "RECEIVE_FEED"
});

export const requestFeed = (feedFilter) => ({
  type: PostConstants.REQUEST_FEED,
  feedFilter
});

export const receiveFeed = (feed) => ({
  type: PostConstants.RECEIVE_FEED,
  feed
});
