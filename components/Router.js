'use strict';

import React from 'react-native';
let { Navigator, StyleSheet, Image, Text, View } = React;
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';

import Fluxxor, { StoreWatchMixin } from "fluxxor";
const FluxMixin = Fluxxor.FluxMixin(React);

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
    mixins: [FluxMixin, StoreWatchMixin("user")],

    getStateFromFlux() {
        const flux = this.getFlux();
        return {
            user: flux.store("user").getState()
        };
    },

    renderScene(route, navigator) {
        var Component = Login;

        console.log(this.state);
        if (this.state.user.loggedIn) {
            initialComponent = route.component;
        }

        return (
            <View style={styles.stretched}>
                <Image
                    source={{uri: 'http://i.imgur.com/5bzJtG5.jpg'}}
                    style={styles.stretched}
                >
                    <View style={styles.backgroundOverlay}>
                        <Navigation navigator={navigator} />
                        <Component navigator={navigator} />
                    </View>
                </Image>
            </View>
        );
    },

    render() {
        return (
            <Navigator
                initialRoute={{
                    component: Login,
                }}
                ref={(navigator) => {
                    this._navigator = navigator;
                }}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
});

export default Router;