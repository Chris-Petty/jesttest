jest.unmock('enzyme');
jest.mock('react-native')

import React, { View, Text, ListView, } from 'react-native';
import { shallow } from 'enzyme';

describe('View', () => {
  it('is a view', () => {
    console.log(`Log View, JUST DO IT: ${View}`);
    let wrapper = shallow(<View />);
    console.log(wrapper.debug());
  });
});
