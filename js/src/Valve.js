import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Animated,
} from 'react-native';
import { observer } from 'mobx-react/native';

@observer
export default class Valve extends Component {

    render() {
        const { left = 182.5, top = 86, animation } = this.props;

        const interpolatedPositionValve = animation.getValue().interpolate({
            inputRange: [0, 1],
            outputRange: [0, 11],
        });
        const interpolatedOpacityValve = animation.getValue().interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],

        });
        const interpolatedOpacityValveTinted = animation.getValue().interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });

        return <View style={[styles.valveWrapper, styles.hiddenOverflow, { left, top }]}>
            <Animated.Image
                style={[styles.valveWrapper, styles.valveUp, {
                    opacity: interpolatedOpacityValve,
                    transform: [{ translateY: interpolatedPositionValve }],
                }]}
                source={require('./assets/ValveSmall.png')}
            />
            <Animated.Image
                style={[styles.valveWrapper, styles.valveUp, {
                    opacity: interpolatedOpacityValveTinted,
                    transform: [{ translateY: interpolatedPositionValve }],
                }]}

                source={require('./assets/ValveSmallTinted.png')}/>
        </View>;
    }
}
/*
const Valve = ( { left = 182.5, top = 86, animation } ) => {
        /!*        const interpolatedPositionValve = animation.getValue().interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 16],
                });*!/

        console.log('left:', left, 'animation', animation);

        return <View style={[styles.valveWrapper, styles.hiddenOverflow, { left, top }]}>
            <Animated.Image
                style={[styles.valveWrapper, styles.valveUp]}
                source={require('./assets/ValveSmall.png')}
            />
            <Animated.Image style={[styles.valveWrapper, styles.valveDn]}
                            source={require('./assets/ValveSmallTinted.png')}/>
        </View>;
    }
;
*/

const styles = StyleSheet.create({
    hiddenOverflow: {
        overflow: 'hidden',
    },
    valveWrapper: {
        position: 'absolute',
        width: 16,
        height: 20,
    },
    valveUp: {
        opacity: 1,
    },
    valveDn: {
        opacity: 0,
    },
});
;
;
;
;
