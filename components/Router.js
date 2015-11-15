'use strict';

import React from 'react-native';
let { Navigator, StyleSheet, Image, Text, View } = React;
import Home from './Home';
import Login from './Login';

let styles = StyleSheet.create({
    stretched: {
        alignSelf: 'stretch',
        flex: 1,
        width: null,
    },
    backgroundOverlay: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        flex: 1,
    }
});

const Router = React.createClass({
    getInitialState: function() {
        return { loggedIn: false };
    },
    _onLogout: function() {
        this.setState({
            loggedIn: false
        });
    },
    _onLogin: function() {
        console.log("Logged in!");
        this.setState({
            loggedIn: true
        });
    },
    renderScene(route, navigator) {
        let Component = route.component;
        var Navbar = route.navbar;
        var _navbar = (
            <Navbar
                onLogout={this._onLogout}
                navigator={navigator} />
        );

        if (!Navbar) {
            _navbar = false;
        }

        return (
            <View>
                {{ _navbar }}
                <Component
                    isLoggedIn={this.state.loggedIn}
                    onLogin={this._onLogin}
                    navigator={navigator}
                    credits={route.credits || 100} />
            </View>
        );
    },

    render() {
        return (
            <View style={styles.stretched}>
                <Image
                    source={{uri: 'http://i.imgur.com/5bzJtG5.jpg'}}
                    style={styles.stretched}
                >
                    <View style={styles.backgroundOverlay}>
                        <Navigator
                            initialRoute={{
                                component: Login,
                                navbar: "",
                            }}
                            renderScene={this.renderScene}
                        />
                    </View>
                </Image>
            </View>
        );
    }
});

export default Router;