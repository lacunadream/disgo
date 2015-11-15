'use strict';

import React from 'react-native';
let { StyleSheet, View } = React;
import RNFB from 'react-native-facebook-login';
let {FBLoginManager, FBLogin} = RNFB;
import Home from './Home';
import Login from './Login';

import Fluxxor from "fluxxor";
const FluxMixin = Fluxxor.FluxMixin(React);

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
});

const FBBtn = React.createClass({
    mixins: [FluxMixin],
    render() {
        return (
            <View style={styles.loginButtonContainer}>
                <FBLogin
                    onLogin={() => {
                        this.getFlux().actions.user.updateLogin(true);
                        this.props.navigator.push({
                            component: Home
                        });
                    }}
                    onLogout={() => {
                        this.getFlux().actions.user.updateLogin(false);
                        this.props.navigator.pop({
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