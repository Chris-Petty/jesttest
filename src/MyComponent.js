/*
*
* A react-native class. Might as well be an SFC.
*
*/

import React, { View } from 'react-native';

class myComponent extends React.Component {
  render() {
    return (
      <View>{this.props.children}</View>
    );
  }
}

export default myComponent;
