jest.unmock('enzyme');
jest.unmock('../MySFC');

import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import MySFC from '../MySFC';

// First MySFC will render as a View component, second will render as a MySFC component
describe('MySFC', () => {
  it('renders one View and one MySFC', () => {
    const wrapper = shallow(
      <MySFC>
        <MySFC>
          <Text>foo</Text>
        </MySFC>
      </MySFC>
    );
    expect(wrapper.find(View).length).toEqual(1); // the first MySFC renders as a View component
    expect(wrapper.find(MySFC).length).toEqual(1); // the second MySFC renders as a MySFC component
    expect(wrapper.contains('foo')).toEqual(true); // foo rendered in there
    console.log(`wrapper debug: \n${wrapper.debug()}`); // run test to see in console
  });
})
