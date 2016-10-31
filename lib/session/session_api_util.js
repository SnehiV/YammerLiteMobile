

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

export const fetchCurrentUser = (success, error) => {
  $.ajax({
    url: "https://bfapp-bfsharing.rhcloud.com/user",
    type: "GET",
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

export const changePhoto = (username, imageParams, success, error) => {
  let fileURL = imageParams.imageFile;
  console.log(fileURL);
  let options =  new FileUploadOptions()
  options.fileKey = "imageFile"
  options.fileName = 'profile'
  options.headers = {'Content-Type':false}
  let ft = new FileTransfer();
  ft.upload(fileURL, encodeURI(`https://bfapp-bfsharing.rhcloud.com/user/${username}/profilepic`),
  success, error, options, true);
  // $.ajax({
  //   url: `https://bfapp-bfsharing.rhcloud.com/user/${username}/profilepic`,
  //   type: "PUT",
  //   data: imageParams,
  //   processData: false,
  //   contentType: false,
  //   xhrFields: {
  //    withCredentials: true
  //   },
  //   success: success,
  //   error: error
  // });
};
