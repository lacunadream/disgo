'use strict';

import React from 'react-native';
let { View, Text, StyleSheet, TextInput } = React;

var styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF',
        margin: 20,
    },
    inputHeading: {
        fontSize: 12,
        color: '#FFF',
        margin: 5,
    }
});

class Home extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}>Buy Do Credits</Text>
                <View style={{position: 'relative', margin: 30}}>
                    <Text style={styles.inputHeading}>Amount</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => console.log(text)}
                        keyboardType='numeric'
                        underlineColorAndroid='#FFF'
                    />
                </View>
                <View style={{margin: 30, flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 0.5}}>
                        <Text style={styles.inputHeading}>Expiry Month</Text>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text) => console.log(text)}
                            keyboardType='numeric'
                            underlineColorAndroid='#FFF'
                        />
                    </View>
                    <View style={{flex: 0.5}}>
                        <Text style={styles.inputHeading}>Expiry Year</Text>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text) => console.log(text)}
                            keyboardType='numeric'
                            underlineColorAndroid='#FFF'
                        />
                    </View>
                </View>
                <View style={{position: 'relative', margin: 30}}>
                    <View style={{flex: 0.5}}>
                        <Text style={styles.inputHeading}>Card Number</Text>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text) => console.log(text)}
                            keyboardType='numeric'
                            underlineColorAndroid='#FFF'
                        />
                    </View>
                    <View>
                        <Text style={styles.inputHeading}>Security Code</Text>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text) => console.log(text)}
                            keyboardType='numeric'
                            underlineColorAndroid='#FFF'
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default Home;