'use strict';

import React from 'react-native';
let { Navigator, StyleSheet, Image, Text, View } = React;
import Navigation from './Navigation';
import FBBtn from './FBBtn';
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

class Router extends React.Component {
    renderScene(route, navigator) {
        let Component = route.component;

        return (
            <View style={styles.stretched}>
                <Image
                    source={{uri: 'http://i.imgur.com/5bzJtG5.jpg'}}
                    style={styles.stretched}
                >
                    <View style={styles.backgroundOverlay}>
                        <Navigation />
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