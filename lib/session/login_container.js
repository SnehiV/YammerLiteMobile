import { connect } from 'react-redux';
import Login from './login';
import { login } from './session_actions';


const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (loginParams) => dispatch(login(loginParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
