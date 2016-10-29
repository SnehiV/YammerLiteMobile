import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import NavigationBar from './navbar';

class App extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className='application-container'>
        <NavigationBar
          currentUser={this.props.currentUser}
          handleLogout={this.props.handleLogout}
          fetchFeed={this.props.fetchFeed}
          changePhoto={this.props.changePhoto} />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
