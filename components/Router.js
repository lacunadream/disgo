'use strict';

import React from 'react-native';
let { Navigator, StyleSheet, Image, Text, View, TouchableOpacity } = React;
import Navigation from './Navigation';
import FBBtn from './FBBtn';

let styles = StyleSheet.create({
    stretched: {
        alignSelf: 'stretch',
        flex: 1,
        width: null,
    },
    heading: {
        color: '#FFF',
        fontSize: 56,
        fontWeight: 'bold',
        marginTop: 100,
        textAlign: 'center',
    },
    backgroundOverlay: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        flex: 1,
    }
});

class Login extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}>Do</Text>
                <FBBtn navigator={this.props.navigator} />
            </View>
        );
    }
}

class Router extends React.Component {
    renderScene(route, navigator) {
        let Component = route.component;
        let Navbar = route.navbar;

        return (
            <View style={styles.stretched}>
                <Image
                    source={{uri: 'https://dl.dropboxusercontent.com/u/43355605/background.jpg'}}
                    style={styles.stretched}
                >
                    <View style={styles.backgroundOverlay}>
                        <Component navigator={navigator} />
                    </View>
                </Image>
            </View>
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    component: Login,
                    navbar: Navigation
                }}
                ref={(navigator) => {
                    this._navigator = navigator;
                }}
                renderScene={this.renderScene}
            />
        );
    }
}

export default Router;