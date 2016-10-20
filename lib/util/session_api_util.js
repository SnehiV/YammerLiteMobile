

export const loginUser = (loginParams, success, error) => {
  $.ajax({
    url: "https://bfapp-bfsharing.rhcloud.com/login",
    type: "POST",
    data: loginParams,
    xhrFields: {
     withCredentials: true
    },
    success: success,
    error: error
  });
};

export const logoutUser = (success, error) => {
  $.ajax({
    url: "https://bfapp-bfsharing.rhcloud.com/logout",
    type: "POST",
    xhrFields: {
     withCredentials: true
    },
    success: success,
    error: error
  });
};
