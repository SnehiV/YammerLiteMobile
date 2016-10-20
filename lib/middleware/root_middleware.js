import { applyMiddleware } from 'redux';
import SessionMiddlware from  './session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddlware
);

export default RootMiddleware;
