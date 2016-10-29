import React from 'react';
import AppRouterContainer from './router_container';
import { Provider } from 'react-redux';
import LoginContainer from '../session/login_container';
import Login from '../session/login';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouterContainer />
  </Provider>
);

export default Root;
