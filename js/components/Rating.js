'use strict';

import React from 'react';
import ReactNative, {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        marginTop: 50,
        marginBottom: 50,
        padding: 20,
        height: 140,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    instructions: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
    },
    ratings: {
        flexDirection: 'row',
    },
    icon: {
        width: 52,
        height: 58,
        margin: 5,
    },
});

export default class Rating extends React.Component {
    // 1
    _onPress(rating) {
        if (this.props.ratingSelectionHandler) {
            this.props.ratingSelectionHandler(rating);
        }
    }

    render() {
        // 2
        const ratings = [];
        for (let k = 1; k <= 5; k++) {
            const key = 'rating-' + k;
            // 3
            const ratingImage = (k <= this.props.rating) ?
                <Image style={styles.icon} source={require('../images/star_on.png')}/> :
                <Image style={styles.icon} source={require('../images/star_off.png')}/>;
            // 4
            const rating =
                <TouchableOpacity key={key} onPress={this._onPress.bind(this, k)}>
                    {ratingImage}
                </TouchableOpacity>;
            ratings.push(rating);
        }
        // 5
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>What did you think about this mixer?</Text>
                <View style={styles.ratings}>
                    {ratings}
                </View>
            </View>
        );
    }
}
