export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const login = (loginParams) => ({
  type: SessionConstants.LOGIN,
  loginParams
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = (currentUser) => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
