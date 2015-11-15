'use strict';

import React from 'react-native';
let { StyleSheet, Text } = React;
import ToolbarAndroid from 'ToolbarAndroid';
import {FBLoginManager} from 'NativeModules';
import Login from './Login';
import Home from './Home';

let styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#2E282A',
        height: 56,
    }
});

let toolbarActions = [
    { title: 'Logout' },
    { title: 'Credits' },
    { title: 'Settings' }
]

class Navigation extends React.Component {
    _onActionSelected(position) {
        if (position === 0) {
            FBLoginManager.logout((error, data) => {
                this.props.navigator.push({
                    component: Login,
                });
            });
        } else if (position === 1) {
            this.props.navigator.push({
                component: Home,
                navbar: Navigation,
            });
        }
    }

    render() {
        return (
            <ToolbarAndroid
                actions={toolbarActions}
                onActionSelected={this._onActionSelected.bind(this)}
                title="Disgo"
                titleColor="#FFF"
                style={styles.toolbar}
            />
        )
    }
}

export default Navigation;