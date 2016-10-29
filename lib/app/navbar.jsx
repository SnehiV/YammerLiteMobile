import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import ChangeProfileImage from './change_profile_image';
var moment = require('moment');

class NavigationBar extends React.Component{
  constructor(props){
    super(props);
    this.handleFeedFilterSelect = this.handleFeedFilterSelect.bind(this);
    this.handleCurrentUserSelect = this.handleCurrentUserSelect.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {
      showPasswordModal: false
    };
  }

  close(type) {
    switch (type) {
      case 'password':
        this.setState({showPasswordModal: false});
        break;
      default:

    }
  }

  open(type) {
    switch (type) {
      case 'password':
        this.setState({showPasswordModal: true});
        break;
      default:

    }
  }


  handleFeedFilterSelect(key){
    $('#feedFilter').text(key);
    $('#feedFilter').append("<span class='caret'></span>");
    let filter;
    switch (key) {
      case 'Today':
        filter = moment().startOf('day').toDate();
        break;
      case 'This Week':
        filter = moment().startOf('week').toDate();
        break;
      case 'Last Week':
        filter = moment().startOf('week').subtract(1, 'week').toDate();
        break;
      case 'This Year':
        filter = moment().startOf('year').toDate();
        break;
      default:
        filter = moment().startOf('week').toDate();
    }
    this.props.fetchFeed(filter);
  }

  handleCurrentUserSelect(key){
    switch (key) {
      case 3.4:
        this.props.handleLogout();
        break;
      default:

    }
  }

  refresh(e){
    let filterString = $('#feedFilter').text().trim();
    this.handleFeedFilterSelect(filterString);
  }

  render(){
    const navNotLoggedIn = (
      <Nav pullRight>
        <NavItem href="#">Create Account</NavItem>
      </Nav>
    );

    const navLoggedIn = () => {
      if (this.props.currentUser){
        return(
          <Nav pullRight>
            <NavItem onClick={this.refresh} href="#">Refresh</NavItem>
            <NavDropdown
              eventKey={3}
              onSelect={this.handleFeedFilterSelect}
              title="This Week"
              id="feedFilter">

              <MenuItem eventKey={'Today'}>Today</MenuItem>
              <MenuItem eventKey={'This Week'}>This Week</MenuItem>
              <MenuItem eventKey={'Last Week'}>Last Week</MenuItem>
              <MenuItem eventKey={'This Year'}>This Year</MenuItem>

            </NavDropdown>

            <NavDropdown
              eventKey={3}
              title={this.props.currentUser.username}
              onSelect={this.handleCurrentUserSelect}
              id="currentUserDropdown">

              <MenuItem eventKey={3.1}>Change Password</MenuItem>
              <ChangeProfileImage
                currentUser={this.props.currentUser}
                changePhoto={this.props.changePhoto} />
              <MenuItem eventKey={3.3}>Chrome Extension</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Logout</MenuItem>

            </NavDropdown>
          </Nav>
        );}
    };

    let nav = this.props.currentUser ? navLoggedIn() : navNotLoggedIn;

    return(
      <div className='app-container'>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">BlueFletch Feed</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {nav}
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default NavigationBar;
