import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
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
    let errors = this.props.session.errors.map(error => {
      return <li>{error}</li>;
    });

    return(
      <div className='login-container'>
        <h3>Sign In</h3>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='login-fields'>
            <input
              type='text'
              className='login-field'
              onChange={this.handleChange('username')}
              value={this.state.username}
              placeholder='Username' />

            <input
              type='text'
              className='login-field'
              onChange={this.handleChange('password')}
              value={this.state.password}
              placeholder='Password' />

            <button id='login-button'>Login</button>
          </div>
        </form>
        <div className='errors'>
          <ul className='error-list'>
            {errors}
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
