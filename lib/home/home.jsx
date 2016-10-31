import React from 'react';
var moment = require('moment');
import PostFeed from '../posts/post_feed';
import PostForm from '../posts/post_form';
import { withRouter } from 'react-router';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      feed: this.props.feed.slice(10)
    };
  }

  componentWillMount(){
    let filter = moment().startOf('week').subtract(1, 'week').toDate();
    this.props.fetchFeed(filter);
  }


  render(){
    return(
      <div className='home-content'>
        <PostForm newPost={this.props.newPost} currentUser={this.props.currentUser} />
        <PostFeed
          currentUser={this.props.currentUser}
          feed={this.props.feed}
          newComment={this.props.newComment}
          editPost={this.props.editPost} />
      </div>
    );
  }
}

export default withRouter(Home);
