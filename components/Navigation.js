'use strict';

import React from 'react-native';
let { StyleSheet, Text } = React;
import ToolbarAndroid from 'ToolbarAndroid';

let styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#2E282A',
        height: 56,
    }
});

let toolbarActions = [
    { title: 'Logout' },
    { title: 'Settings' }
]

class Navigation extends React.Component {
    render() {
        return (
            <ToolbarAndroid
                actions={toolbarActions}
                title="Disgo"
                titleColor="#FFF"
                style={styles.toolbar}
            >
                <Text>Test</Text>
            </ToolbarAndroid>
        )
    }
}

export default Navigation;