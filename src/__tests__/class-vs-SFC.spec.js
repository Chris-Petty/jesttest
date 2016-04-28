jest.unmock('enzyme');
jest.unmock('../MySFC');
jest.unmock('../MyComponent');

import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import MySFC from '../MySFC';
import MyComponent from '../MyComponent';

describe('myComponent', () => {
  it('renders View and not myComponent ', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(View).length).toEqual(1);
    expect(wrapper.find(MyComponent).length).toEqual(0);
  });
});

describe('MySFC', () => {
  it('renders a View and not MySFC', () => {
    const wrapper = shallow(<MySFC />);
    expect(wrapper.find(View).length).toEqual(1);
    expect(wrapper.find(MySFC).length).toEqual(0);
  });
})
