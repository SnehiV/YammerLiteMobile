import React from 'react';
import { Link, withRouter} from 'react-router';
import NavigationBar from './navbar';

class App extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      <div className='app-container'>
        <NavigationBar
          currentUser={this.props.currentUser}
          handleLogout={this.props.handleLogout} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
