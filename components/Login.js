'use strict';

import React from 'react-native';
let { StyleSheet, Text, View } = React;
import FBBtn from './FBBtn';

let styles = StyleSheet.create({
    heading: {
        color: '#FFF',
        fontSize: 56,
        fontWeight: 'bold',
        marginTop: 100,
        textAlign: 'center',
    },
});

class Login extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}>Do</Text>
                <FBBtn
                    navigator={this.props.navigator} />
            </View>
        );
    }
}

export default Login;