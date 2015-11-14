// TODO: Rename to router
import React from 'react-native';
import ToolbarAndroid from 'ToolbarAndroid';
let { Navigator, StyleSheet, View, Image } = React;

let styles = StyleSheet.create({
    backgroundImageWrapper: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
    },
    toolbar: {
        backgroundColor: '#2E282A',
        height: 56,
    }
});

class Navigation extends React.Component {
    render() {
        return (
            <ToolbarAndroid
                title="Disgo"
                titleColor="#FFF"
                style={styles.toolbar}
            />
        )
    }
}

class Router extends React.Component {
    renderScene(route, navigator) {
        let Navbar = route.navbar;
        return (
            <View style={styles.backgroundImageWrapper}>
                <Image
                    source={require('../assets/img/background.jpg')}
                    style={styles.backgroundImage}
                />
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