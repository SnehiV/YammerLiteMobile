import React from 'react';
var moment = require('moment');
import { Image } from 'react-bootstrap';
import EditComment from './edit_comment';

const CommentItem = ({comment, editable, editComment, postId}) => {
  let editLink;
  if (editable) {
    editLink = <EditComment postId={postId} comment={comment} editComment={editComment} />;
  }
  return (
    <div className='comment-container'>
      <div className="comment-item">
        <Image className='comment-profile' src={`https://bfapp-bfsharing.rhcloud.com/${comment.commentUser.imageUrl}`} responsive />
        <div className='comment-item-content'>
          <div className='comment-item-header'>
            <h4 className='comment-username'>{comment.commentUser.username}</h4>
            <p className='comment-timestamp'>{moment(new Date(comment.createdDate)).fromNow()}</p>
          </div>
          <p className='comment-text'>{comment.commentText}</p>
          {editLink}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
