export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  REMOVE_CURRENT_USER: "REMOVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CHANGE_PROFILE_IMAGE: "CHANGE_PROFILE_IMAGE"
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

export const removeCurrentUser = () => ({
  type: SessionConstants.REMOVE_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});

export const changeProfileImage = (username, imageFile) => ({
  type: SessionConstants.CHANGE_PROFILE_IMAGE,
  imageFile,
  username
});
