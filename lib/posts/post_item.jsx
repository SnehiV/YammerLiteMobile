import React from 'react';
var moment = require('moment');
import { Image, Button } from 'react-bootstrap';
import CommentFeedContainer from './comment_feed_container';
import EditPost from './edit_post';

class PostItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let editLink;
    if (this.props.editable) {
      editLink = <EditPost post={this.props.post} editPost={this.props.editPost} />;
    }
    return (
      <div className="list-group">
        <div className='post-item'>
          <Image src={`https://bfapp-bfsharing.rhcloud.com${this.props.post.postUser.imageUrl}`} responsive />
          <div className='post-item-header'>
            <h4 className='post-username'>{this.props.post.postUser.username}</h4>
            <p className='post-timestamp'>{moment(new Date(this.props.post.createdDate)).fromNow()}</p>
            {editLink}
          </div>
          <p className='post-text'>{this.props.post.postText}</p>
        </div>
        <CommentFeedContainer post={this.props.post} />
      </div>
    );
  }
}

export default PostItem;
