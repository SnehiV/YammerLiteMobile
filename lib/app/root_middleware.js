import { applyMiddleware } from 'redux';
import SessionMiddlware from  '../session/session_middleware';
import PostMiddleware from '../posts/post_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddlware,
  PostMiddleware
);

export default RootMiddleware;
