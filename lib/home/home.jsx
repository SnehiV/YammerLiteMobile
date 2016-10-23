import React from 'react';
var moment = require('moment');
import PostItem from '../posts/post_item';


class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    let filter = moment(Date.now()).subtract(4, 'months').toDate();
    this.props.fetchFeed(filter);
  }

  render(){
    let feed = this.props.feed.map(post => {
      return <PostItem key={post._id} post={post} />;
    });

    return(
      <ul>
        {feed}
      </ul>
    );
  }

}

export default Home;
