'use strict';

import React from 'react-native';
let { AppRegistry } = React;

import Router from './components/Router';

import Fluxxor from "fluxxor";
import Stores from "./stores/Stores";
import Actions from "./actions/Actions";
const flux = new Fluxxor.Flux(Stores, Actions);

var Do = React.createClass({
    childContextTypes: {
        flux: React.PropTypes.object,
    },
    getChildContext() {
        return {
            flux: flux,
        };
    },
    render() {
        return (
            <Router />
        );
    }
});

AppRegistry.registerComponent('Do', () => Do);