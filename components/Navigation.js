import React from 'react-native';
let { StyleSheet } = React;
import ToolbarAndroid from 'ToolbarAndroid';

let styles = StyleSheet.create({
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

export default Navigation;