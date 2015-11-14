'use strict';

import React from 'react-native';
let { AppRegistry } = React;

import Router from './components/Router.js';

class disgo extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

AppRegistry.registerComponent('disgo', () => disgo);