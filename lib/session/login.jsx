import React from 'react';
import { Form, FormGroup, Col, FormControl, Button} from 'react-bootstrap';

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
      <Col className='login-container' xsOffset={2} smOffset={3} xs={8} sm={6}>
          <Col xsOffset={2} smOffset={3}>
            <h3>Sign In</h3>
          </Col>
          <Form horizontal onSubmit={this.handleSubmit}>
           <FormGroup controlId="formHorizontalUsername">
             <Col xs={8} sm={6} xsOffset={2} smOffset={3}>
               <FormControl
                 type="username"
                 placeholder="Username"
                 value={this.state.username}
                 onChange={this.handleChange('username')}/>
             </Col>
           </FormGroup>

           <FormGroup controlId="formHorizontalPassword">
             <Col xs={8} sm={6} xsOffset={2} smOffset={3}>
               <FormControl
                 type="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.handleChange('password')} />
             </Col>
           </FormGroup>

           <FormGroup>
            <Col xs={8} sm={6} xsOffset={2} smOffset={3}>
              <Button bsSize="lg" type="submit" block>
                Login
              </Button>
            </Col>
           </FormGroup>
          </Form>
        <Col xs={8} sm={6} xsOffset={2} smOffset={3}>
          <div className='errors'>
            {error}
          </div>
        </Col>
      </Col>
    );
  }
}

export default Login;
