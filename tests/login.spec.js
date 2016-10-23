import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Login from '../session/login';

describe('<Login />', () => {
  const login = mount(<Login />);

  it('should have two inputs and a login button', () => {
    expect(login.find('input')).to.have.length(2);
    expect(login.find('button')).to.have.length(1);
  });

  it('should have input values that are controlled', () => {
    const username = login.find('input').get(0);
    const password = login.find('input').get(1);
    login.setState({username: 'test', password: 'input'});
    console.log(username.value);
    login.find('form').simulate('submit');
    expect(login.state('username')).toEqual("");
    expect(login.state('password')).toEqual("");
  });

});
