import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import NavigationBar from './navbar';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      intervalId: null
    };
  }

  componentDidMount(){
    let feedFilter = this.props.timestamp;
    let checkUpdates = () => {
      this.props.fetchUpdateCount(feedFilter);
    };
    let intervalId = setInterval(checkUpdates, 5000);
    this.setState({
      intervalId: intervalId
    });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.updates === 0) {      
      if (this.state.intervalId) {
        clearInterval(this.state.intervalId);
      }
      let feedFilter = nextProps.timestamp;
      let checkUpdates = () => {
        this.props.fetchUpdateCount(feedFilter);
      };
      let intervalId = setInterval(checkUpdates, 5000);
      this.setState({
        intervalId: intervalId
      });
    }
  }

  render(){
    return(
      <div className='application-container'>
        <NavigationBar
          currentUser={this.props.currentUser}
          handleLogout={this.props.handleLogout}
          fetchFeed={this.props.fetchFeed}
          changePhoto={this.props.changePhoto}
          updateCount={this.props.updates} />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
