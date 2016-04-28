jest.unmock('enzyme');

import React, { Text } from 'react-native';
import { shallow } from 'enzyme';

describe('Text', () => {
  it('is a Text', () => {
    const wrapper = shallow(<Text>Hello world</Text>);
    // Due to mock implementation, Text and other RN components
    // actually return null! Important caveat!
    expect(wrapper.find(Text).length).toEqual(0); // passes
  });
});
