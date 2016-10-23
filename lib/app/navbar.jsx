import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import ChangeProfileImage from './change_profile_image';

class NavigationBar extends React.Component{
  constructor(props){
    super(props);
    this.handleFeedFilterSelect = this.handleFeedFilterSelect.bind(this);
    this.handleCurrentUserSelect = this.handleCurrentUserSelect.bind(this);
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
  }

  handleCurrentUserSelect(key){
    switch (key) {
      case 3.4:
        this.props.handleLogout();
        break;
      default:

    }
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
            <NavItem eventKey={1} href="#">Refresh</NavItem>
            <NavDropdown
              eventKey={3}
              onSelect={this.handleFeedFilterSelect}
              title="Today"
              id="feedFilter">

              <MenuItem eventKey={'Today'}>Today</MenuItem>
              <MenuItem eventKey={'This Week'}>This Week</MenuItem>
              <MenuItem eventKey={'Last Week'}>Last Week</MenuItem>
              <MenuItem eventKey={'All'}>All</MenuItem>

            </NavDropdown>

            <NavDropdown
              eventKey={3}
              title={this.props.currentUser.username}
              onSelect={this.handleCurrentUserSelect}
              id="currentUserDropdown">

              <MenuItem eventKey={3.1}>Change Password</MenuItem>
              <ChangeProfileImage />
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
              <a href="#">BlueFetch Feed</a>
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
