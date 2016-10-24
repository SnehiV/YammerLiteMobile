import { SessionConstants } from './session_actions';
import merge from 'lodash/merge';


const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
  let newState;
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      newState.errors = [];
      newState.timestamp = Date.now();
      return Object.freeze(newState);
    case SessionConstants.RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      newState.errors.push(action.errors.responseText);
      return Object.freeze(newState);
    case SessionConstants.REMOVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = null;
      newState.errors = [];
      return Object.freeze(newState);
    default:
      return state;
  }
};

export default SessionReducer;
