import React from 'react';
import { Link, withRouter} from 'react-router';
import NavigationBar from './navbar';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  //
  componentDidUpdate(prevProps, prevState){
    if (!prevProps.currentUser && this.props.currentUser) {
      this.props.router.push('/home');
    } else if (prevProps.currentUser && !this.props.currentUser) {
      this.props.router.push('/');
    }
  }


  render(){
    return(
      <div className='application-container'>
        <NavigationBar
          currentUser={this.props.currentUser}
          handleLogout={this.props.handleLogout}
          fetchFeed={this.props.fetchFeed} />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
