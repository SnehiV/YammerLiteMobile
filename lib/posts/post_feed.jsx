import React from 'react';
import PostItem from './post_item';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
var moment = require('moment');

const PostFeed = ({feed, editPost, currentUser}) => {
  let feedList = feed.map(post => {
    let createdDate = moment(post.createdDate);
    let twentyfour = moment().subtract(24, 'hours');
    let editable = (
      createdDate.isBetween(twentyfour, moment()) &&
      post.postUser._id === currentUser._id
    );


    return (
          <PostItem
            key={`${post.postText}${post._id}`}
            post={post}
            editable={editable}
            editPost={editPost} />
    );
  });
  return(
      <ListGroup componentClass='ul'>
        {feedList}
      </ListGroup>
  );
};

export default PostFeed;
