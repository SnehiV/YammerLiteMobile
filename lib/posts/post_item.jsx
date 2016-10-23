import React from 'react';
var moment = require('moment');
import { Image } from 'react-bootstrap';

const PostItem = ({post}) => (
  <div className="post-item">
    <Image src={`https://bfapp-bfsharing.rhcloud.com/user/username/${post.postUser.username}${post.postUser.imageUrl}`} responsive />
    <div className='post-item-header'>
      <h4>{post.postUser.username}</h4>
      <p>{moment(new Date(post.createdDate)).fromNow()}</p>
    </div>
      <p className='post-text'>{post.postText}</p>
  </div>
);

export default PostItem;
