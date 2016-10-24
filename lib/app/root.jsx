import React from 'react';
import AppRouter from './router';
import { Provider } from 'react-redux';
import LoginContainer from '../session/login_container';
import Login from '../session/login';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter currentUser={store.getState().session.currentUser} />
  </Provider>
);

export default Root;
