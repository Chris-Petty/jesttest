/*
*
* A react-native class. Might as well be an SFC.
*
*/

import React, { View } from 'react-native';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'foo',
    };
  }

  render() {
    return (
      <View>{this.props.children}</View>
    );
  }
}
