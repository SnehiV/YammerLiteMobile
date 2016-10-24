import React from 'react';
import PostItem from './post_item';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const PostFeed = ({feed}) => {
  let feedList = feed.map(post => {
    return (
        <ListGroupItem>
          <PostItem className='post-item' key={post._id} post={post} />
        </ListGroupItem>
    );
  });
  return(
    <Col xsOffset={0} smOffset={1} xs={12} sm={10} className='post-feed'>
      <ListGroup className='feed-list'>
        {feedList}
      </ListGroup>
    </Col>
  );
};

export default PostFeed;
