import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const Button = ({label, callback}) => {
    return <View>
        <TouchableOpacity
            onPress={() => {
                callback();
            }}>
            <Text>{label}</Text>
        </TouchableOpacity>
    </View>;
};

export default Button;