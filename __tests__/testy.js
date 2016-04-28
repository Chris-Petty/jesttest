jest.unmock('enzyme');
jest.mock('react-native')

import React, { View, Text, ListView, } from 'react-native';
import { shallow } from 'enzyme';

describe('View', () => {
  it('is a view', () => {
    const wrapper = shallow(<Text>Hello world</Text>);
    console.log(`Wrapper.debug(): ${wrapper.html()}`);
  });
});
