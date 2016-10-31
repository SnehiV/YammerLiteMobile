import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';
import { ListGroup } from 'react-bootstrap';
var moment = require('moment');


class Comments extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let commentsList = this.props.post.comments.map(comment => {
      let createdDate = moment(comment.createdDate);
      let twentyfour = moment().subtract(24, 'hours');
      let editable = (
        createdDate.isBetween(twentyfour, moment()) &&
        comment.commentUser._id === this.props.currentUser._id
      );
      return <CommentItem
        className='list-group-item'
        key={`${comment._id}${comment.commentText}`}
        comment={comment}
        editable={editable}
        editComment={this.props.editComment}
        postId={this.props.post._id} />;
    });

    return(
      <ListGroup id='comments' componentClass='ul'>
        {commentsList}
        <CommentForm
          post={this.props.post}
          newComment={this.props.newComment}
          currentUser={this.props.currentUser} />
      </ListGroup>
    );
  }
}

export default Comments;
