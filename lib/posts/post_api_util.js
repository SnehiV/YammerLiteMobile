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

export const fetchProfilePic = (success, error) => {
  $.ajax({
    url: "https://bfapp-bfsharing.rhcloud.com/user/test1/profilepic",
    type: "GET",
    xhrFields: {
     withCredentials: true
    },
    success: success,
    error: error
  });
};
