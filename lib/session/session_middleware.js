import { SessionConstants, login, logout, removeCurrentUser,
  receiveCurrentUser, receiveErrors} from './session_actions';

import {loginUser, logoutUser} from './session_api_util';

const SessionMiddlware = store => next => action => {
  let success;
  let error = (errors) => store.dispatch(receiveErrors(errors));
  switch (action.type) {
    case SessionConstants.LOGIN:
      success = (currentUser) => store.dispatch(receiveCurrentUser(currentUser));
      loginUser(action.loginParams, success, error);
      break;
    case SessionConstants.LOGOUT:
      success = () => store.dispatch(removeCurrentUser());
      logoutUser(success, error);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddlware;
