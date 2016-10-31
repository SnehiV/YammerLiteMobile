import { combineReducers } from 'redux';
import SessionReducer from '../session/session_reducer';
import PostReducer from '../posts/post_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostReducer
});

export default RootReducer;
