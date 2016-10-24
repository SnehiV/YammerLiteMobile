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
    if (!this.props.currentUser){
      this.props.router.push('/');
    }
    let filter = moment(Date.now()).subtract(1, 'week').toDate();
    this.props.fetchFeed(filter);
  }


  render(){
    return(
      <div className='home-content'>
        <PostForm newPost={this.props.newPost} currentUser={this.props.currentUser} />
        <PostFeed feed={this.props.feed} newComment={this.props.newComment} />
      </div>
    );
  }
}

export default withRouter(Home);
