// TODO: Rename to router
import React from 'react-native';
let { Navigator, StyleSheet, Image, Text, View, TouchableOpacity } = React;
import Navigation from './Navigation';

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
        padding: 20,
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
                    source={require('../assets/img/background.jpg')}
                    style={styles.stretched}
                >
                    <Text style={styles.heading}>Do</Text>
                    <View style={styles.loginButtonContainer}>
                        <Text style={styles.loginButton}>Login with Facebook</Text>
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