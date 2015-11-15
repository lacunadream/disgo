'use strict';

import React from 'react-native';
let { TouchableNativeFeedback, StyleSheet, Text, View } = React;

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = { credits: 100 };
    }

    _handleDo() {
        this.setState({
            credits: this.state.credits - 1
        });
    }

    render() {
        return (
            <View style={{margin: 30}}>
                <Text
                    style={{color: '#FFF', fontSize: 16,  textAlign: 'center', margin: 20}}>
                    Your Do Credits: {this.state.credits}
                </Text>

                <TouchableNativeFeedback
                    onPress={this._handleDo.bind(this)}
                >
                    <View style={{backgroundColor: '#F9ED69', padding: 20}}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Do It!</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

export default Control;