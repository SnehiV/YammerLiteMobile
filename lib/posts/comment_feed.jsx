import React from 'react';
import CommentItem from './comment_item';
import CommentFormContainer from './comment_form_container';
import { ListGroup } from 'react-bootstrap';
const Comments = ({post}) => {
  let commentsList = post.comments.map(comment => {
    return <CommentItem className='list-group-item' key={comment._id} comment={comment} />;
  });
  return(
      <ListGroup id='comments' componentClass='ul'>
        {commentsList}
        <CommentFormContainer post={post} />
      </ListGroup>
  );
};

export default Comments;
