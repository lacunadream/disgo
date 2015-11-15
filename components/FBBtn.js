'use strict';

import React from 'react-native';
let { StyleSheet, View } = React;
import RNFB from 'react-native-facebook-login';
let {FBLoginManager, FBLogin} = RNFB;
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';

let styles = StyleSheet.create({
    loginButtonContainer: {
        backgroundColor: '#3b5998',
        margin: 50,
    },
    loginButton: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
    }
})

const FBBtn = React.createClass({
    render() {
        return (
            <View style={styles.loginButtonContainer}>
                <FBLogin
                    onLogin={() => {
                        this.props.onLogin();
                        this.props.navigator.push({
                            component: Home,
                            navbar: Navigation
                        });
                    }}
                    onLogout={() => {
                        this.props.navigator.push({
                            component: Login,
                        });
                    }}
                    onCancel={function(e){console.log(e)}}
                    onPermissionsMissing={function(e){console.log(e)}}
                />
            </View>
        );
    }
});

export default FBBtn;