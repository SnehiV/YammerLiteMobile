import { SessionConstants, login, logout, removeCurrentUser,
  receiveCurrentUser, receiveErrors, changeProfileImage} from './session_actions';

import {loginUser, logoutUser, changePhoto} from './session_api_util';

import {hashHistory} from 'react-router';


const SessionMiddlware = store => next => action => {
  let success;
  let error = (errors) => store.dispatch(receiveErrors(errors));
  switch (action.type) {
    case SessionConstants.LOGIN:
      success = (currentUser) => store.dispatch(receiveCurrentUser(currentUser));
      loginUser(action.loginParams, success, error);
      break;
    case SessionConstants.LOGOUT:
      success = () => {
        hashHistory.push('/');
        store.dispatch(removeCurrentUser());
      };
      logoutUser(success, error);
      break;
    case SessionConstants.CHANGE_PROFILE_IMAGE:
      success = (currentUser) => store.dispatch(receiveCurrentUser(currentUser));
      let imageParams = {imageFile: action.imageFile};
      console.log(imageParams);
      changePhoto(action.username, imageParams, success, error);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddlware;
