import React from 'react';
var moment = require('moment');
import { Image } from 'react-bootstrap';
import CommentFeed from './comment_feed';

const PostItem = ({post}) => (
    <div className="list-group">
      <div className='post-item'>        
        <Image src={`https://bfapp-bfsharing.rhcloud.com${post.postUser.imageUrl}`} responsive />
        <div className='post-item-header'>
          <h4 className='post-username'>{post.postUser.username}</h4>
          <p className='post-timestamp'>{moment(new Date(post.createdDate)).fromNow()}</p>
        </div>
        <p className='post-text'>{post.postText}</p>
      </div>
      <CommentFeed post={post} />
    </div>
);

export default PostItem;
