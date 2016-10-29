var moment = require('moment');
let date = moment(Date.now()).subtract(4, 'months').toDate();
export const fetchFeed = (filterDate, success, error) => {
  $.ajax({
    url: "https://bfapp-bfsharing.rhcloud.com/feed",
    type: "GET",
    data: {asOfDt: filterDate},
    xhrFields: {
     withCredentials: true
    },
    success: success,
    error: error
  });
};

export const newPost = (postParams, success, error) => {
  $.ajax({
    url: "https://bfapp-bfsharing.rhcloud.com/post",
    type: "POST",
    data: postParams,
    xhrFields: {
     withCredentials: true
    },
    success: success,
    error: error
  });
};

export const newComment = (commentParams, success, error) => {
  $.ajax({
    url: "https://bfapp-bfsharing.rhcloud.com/comment",
    type: "POST",
    data: commentParams,
    xhrFields: {
     withCredentials: true
    },
    success: success,
    error: error
  });
};

export const submitPostEdit = (postParams, success, error) => {
  $.ajax({
    url: `https://bfapp-bfsharing.rhcloud.com/post/${postParams.id}`,
    type: "PUT",
    data: postParams,
    xhrFields: {
     withCredentials: true
    },
    success: success,
    error: error
  });
};

export const submitCommentEdit = (commentParams, success, error) => {
  $.ajax({
    url: `https://bfapp-bfsharing.rhcloud.com/comment/${commentParams.id}`,
    type: "PUT",
    data: commentParams,
    xhrFields: {
     withCredentials: true
    },
    success: success,
    error: error
  });
};
