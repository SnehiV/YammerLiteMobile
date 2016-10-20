import React from 'react';
import LoginContainer from './login_container';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <LoginContainer />
  </Provider>
);

export default Root;
