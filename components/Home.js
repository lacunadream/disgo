'use strict';

import React from 'react-native';
let { View, Text, StyleSheet } = React;

var styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF',
        margin: 20,
    },
});

class Home extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}>Enter Your Details</Text>
            </View>
        );
    }
}

export default Home;