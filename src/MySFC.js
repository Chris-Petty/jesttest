/*
*
* A react-native class. Might as well be an SFC.
*
*/

import React, { View } from 'react-native';

export default function MySFC(props){
  return (
    <View>{props.children}</View>
  );
}
