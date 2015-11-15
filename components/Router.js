'use strict';

import React from 'react-native';
let { Navigator, StyleSheet, Image, Text, View, TouchableOpacity } = React;
import Navigation from './Navigation';
import RNFB from 'react-native-facebook-login';
let {FBLoginManager, FBLogin} = RNFB;

let styles = StyleSheet.create({
    stretched: {
        alignSelf: 'stretch',
        flex: 1,
        width: null,
    },
    heading: {
        color: '#FFF',
        fontSize: 56,
        marginTop: 100,
        textAlign: 'center',
    },
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

class Router extends React.Component {
    renderScene(route, navigator) {
        let Navbar = route.navbar;
        return (
            <View style={styles.stretched}>
                <Image
                    source={{uri: 'https://dl.dropboxusercontent.com/u/43355605/background.jpg'}}
                    style={styles.stretched}
                >
                    <Text style={styles.heading}>Do</Text>
                    <View style={styles.loginButtonContainer}>
                        <FBLogin
                            onLogin={function(e){console.log(e)}}
                            onLogout={function(e){console.log(e)}}
                            onCancel={function(e){console.log(e)}}
                            onPermissionsMissing={function(e){console.log(e)}}
                        />
                    </View>
                </Image>
            </View>
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    navbar: Navigation
                }}
                renderScene={this.renderScene}
            />
        );
    }
}

export default Router;