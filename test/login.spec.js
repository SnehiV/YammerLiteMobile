import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Login from '../lib/session/login';

describe('<Login />', () => {
  const appState = {currentUser: null, errors: []};
  const handleLogin = (e) => {};
  const login = mount(
    <Login session={appState} handleLogin={handleLogin} />);

  it('should have two inputs and a login button', () => {
    expect(login.find('input')).to.have.length(2);
    expect(login.find('button')).to.have.length(1);
  });

  it('should have input values that are controlled', () => {
    const username = login.find('input').get(0);
    const password = login.find('input').get(1);
    login.setState({username: 'test', password: 'input'});
    expect(username.value).to.equal("test");
    expect(password.value).to.equal("input");
    login.find('form').simulate('submit');
    expect(username.value).to.equal("");
    expect(password.value).to.equal("");
  });

});
