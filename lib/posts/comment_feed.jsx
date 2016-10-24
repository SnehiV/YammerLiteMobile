import React from 'react';
import CommentItem from './comment_item';
import CommentFormContainer from './comment_form_container';

const Comments = ({post}) => {
  let commentsList = post.comments.map(comment => {
    return <CommentItem className='item' key={comment._id} comment={comment} />;
  });
  return(
    <div className='comments'>
      <ul className='comment-list'>
        {commentsList}
      </ul>
      <CommentFormContainer post={post} />
    </div>
  );
};

export default Comments;
