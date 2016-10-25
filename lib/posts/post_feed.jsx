import React from 'react';
import PostItem from './post_item';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const PostFeed = ({feed}) => {
  let feedList = feed.map(post => {
    return (
          <PostItem key={post._id} post={post} />
    );
  });
  return(
      <ListGroup componentClass='ul'>
        {feedList}
      </ListGroup>
  );
};

export default PostFeed;
