'use strict';

import React from 'react-native';
let { AppRegistry } = React;

import Router from './components/Router.js';

class Do extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

AppRegistry.registerComponent('Do', () => Do);