import React from 'react';
import { Form, FormGroup, Col, FormControl, Button} from 'react-bootstrap';
import { withRouter } from 'react-router';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      showPasswordModal: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps({session}) {
    if (this.props.session.currentUser !== session.currentUser){
      this.props.router.replace("/home");
    }
  }

  handleChange(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let userParams = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleLogin(userParams);
    this.setState({username: "", password: ""});
  }

  render(){

    let error;
    if (this.props.session.errors.length > 0) {
      error = <p>{this.props.session.errors[0]}</p>;
    }
    return(
      <Col className='login-container' xsOffset={0} smOffset={1} xs={12} sm={10} md={6} mdOffset={3}>
          <Col xsOffset={0} smOffset={1} mdOffset={3}>
            <h3 id='sign-in'>Sign In</h3>
          </Col>
          <Form horizontal onSubmit={this.handleSubmit}>
           <FormGroup controlId="formHorizontalUsername">
             <Col xs={12} sm={10} xsOffset={0} smOffset={1} md={6} mdOffset={3}>
               <FormControl
                 type="username"
                 placeholder="Username"
                 value={this.state.username}
                 onChange={this.handleChange('username')}/>
             </Col>
           </FormGroup>

           <FormGroup controlId="formHorizontalPassword">
             <Col xs={12} sm={10} xsOffset={0} smOffset={1} md={6} mdOffset={3}>
               <FormControl
                 type="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.handleChange('password')} />
             </Col>
           </FormGroup>

           <FormGroup>
            <Col xs={12} sm={10} xsOffset={0} smOffset={1} md={6} mdOffset={3}>
              <Button bsSize="lg" type="submit" block>
                Login
              </Button>
            </Col>
           </FormGroup>
          </Form>
        <Col xs={12} sm={10} xsOffset={0} smOffset={1} md={6} mdOffset={3}>
          <div className='errors'>
            {error}
          </div>
        </Col>
      </Col>
    );
  }
}

export default withRouter(Login);
