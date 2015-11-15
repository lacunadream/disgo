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
        marginTop: 100,
        textAlign: 'center',
    },
});

class Router extends React.Component {
    renderScene(route, navigator) {
        let Component = route.component;
        let Navbar = route.navbar;

        if (Component) {
            return (
                <View>
                    <Component />
                    <FBBtn navigator={navigator} />
                </View>
            );
        }

        return (
            <View style={styles.stretched}>
                <Image
                    source={{uri: 'https://dl.dropboxusercontent.com/u/43355605/background.jpg'}}
                    style={styles.stretched}
                >
                    <Text style={styles.heading}>Do</Text>
                    <FBBtn navigator={navigator} />
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
                ref={(navigator) => {
                    this._navigator = navigator;
                }}
                renderScene={this.renderScene}
            />
        );
    }
}

export default Router;