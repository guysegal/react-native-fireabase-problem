import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Animated } from 'react-native';

import { observable } from 'mobx';
import { observer } from 'mobx-react/native';

import AnimationObservable from './mobx/animation';

@observer
export default class AnimationTest extends Component {

    constructor() {
        super();
        this.secondAnimation = new AnimationObservable();
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.timing = Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 500,
        });

        this.opacityInterpolated = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });
    }

    componentDidMount() {
        this.secondAnimation.start();
    }

    fadeIn() {
        console.log('fade in', this.timing);
        this.timing = Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 500,
        });
        this.timing.start(() => console.log('done'));
    }

    fadeOut() {
        console.log('fade out');
        this.timing = Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 500,
        });
        this.timing.start(() => console.log('done'));
    }

    fadeInSecond() {
        console.log('fadeInSecond');
    }

    fadeOutSecond() {
        console.log('fadeOutSecond');
        this.secondAnimation.setTimingTo(0);
        this.secondAnimation.start();

    }

    render() {
        // console.log(this.timing, 'RENDER animatedValue', this.animatedValue);

        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Animated.Text style={[styles.text, { opacity: this.animatedValue }]}>FIRST TEXT</Animated.Text>
                    <Animated.Text style={[{ opacity: this.secondAnimation.getValue() }]}>SECOND TEXT</Animated.Text>
                </View>
                <View style={styles.buttons}>
                    <Button title='Fade In First' onPress={() => this.fadeIn()}/>
                    <Button title='Fade Out First' onPress={() => this.fadeOut()}/>
                    <Button title='Fade In Second' onPress={() => this.fadeInSecond()}/>
                    <Button title='Fade Out Second' onPress={() => this.fadeOutSecond()}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row',
    },
    text: {
        fontWeight: '900',
        opacity: 0,
    },
    button: {
        fontSize: 8,
        backgroundColor: 'goldenrod',
        borderColor: 'black',
    },
});
