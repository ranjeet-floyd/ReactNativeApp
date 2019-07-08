import React from 'react';
import {
    View,
    Text
} from 'react-native';

const Hello = () => {
    return (
        <View>
            <Text>Hello React Native from Walmart training</Text>
            <Text> Genearated @{new Date().toTimeString()} </Text>
        </View>
    );
}

export default Hello;