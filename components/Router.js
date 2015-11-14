// TODO: Rename to router
import React from 'react-native';
let { Navigator, StyleSheet, Image, Text, View } = React;
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
        textAlign: 'center',
        marginTop: 100,
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
                    <Text style={styles.heading}>Disgo</Text>
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