// jest.unmock('react');
//
// // jest.unmock('react-native-mock');
// // module.exports = require('react-native-mock');
//
//
// /**
//  * # __mockes__/react-native.js
//  *
//  * This class stubs out the React-Native classes with React classes
//  */
// /**
//  * ## Imports
//  *
//  * ReactNative is actually React
//  */
// const React = require('react');
// const ReactNative = React;
//
// /**
//  * ## These need additional mocking
//  *
//  * ReactNative is actually React
//  */
// ReactNative.StyleSheet = {
//   create: function create(styles) {
//     return styles;
//   },
// };
// class View extends React.Component {
//   render() { return false; }
// }
// class PixelRatio extends React.Component {
//   static get() { return 1; }
// }
// /**
//  * ## Stubs
//  *
//  * Simple replacements for testing
//  */
// ReactNative.View = View;
// ReactNative.ScrollView = View;
// ReactNative.Text = View;
// ReactNative.TouchableOpacity = View;
// ReactNative.TouchableHighlight = View;
// ReactNative.TouchableWithoutFeedback = View;
// ReactNative.ToolbarAndroid = View;
// ReactNative.Image = View;
// ReactNative.PixelRatio = PixelRatio;
// ReactNative.NativeModules = {};
//
// ReactNative.Platform = {};
// module.exports = ReactNative;


jest.unmock('react-native-mock');

import React from 'react-native-mock/mock';
export default React;