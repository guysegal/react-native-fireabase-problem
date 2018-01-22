import React, { Component } from 'react';
import { Animated, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Svg, {
    Circle,
    G,
    Rect,
} from 'react-native-svg';
import { inject, observer } from 'mobx-react/native';

@inject('fingeringPickerStore') @observer
export default class Fingering extends Component {
    constructor() {
        super();

        this.state = {
            circle_0: true,
            circle_1: true,
            circle_2: true,
        };
        this.onCircleClick = this.onCircleClick.bind(this);
    }

    onCircleClick( which ) {
        const { style, onCirclePress } = this.props;
        const isPressed = !this.state[which];
        const animateTo = (isPressed) ? 0 : 1;
        switch (which) {
            case 'circle_0':
                this.setState({ circle_0: isPressed });
                break;
            case 'circle_1':
                this.setState({ circle_1: isPressed });
                break;
            case 'circle_2':
                this.setState({ circle_2: isPressed });
                break;

        }
        onCirclePress(which, animateTo);
    }

    componentWillMount() {

    }

    render() {
        const onCircleClick = this.onCircleClick;
        const { style, animationOne, animationTwo, animationThree } = this.props;

        const interpolatedColorOne = animationOne.getValue().interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0,0,0, 0)', 'rgba(0,0,0, 1)'],
        });

        const interpolatedColorTwo = animationTwo.getValue().interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0,0,0, 0)', 'rgba(0,0,0, 1)'],
        });

        const interpolatedColorThree = animationThree.getValue().interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0,0,0, 0)', 'rgba(0,0,0, 1)'],
        });


        return <View style={style}>
            <TouchableWithoutFeedback
                id='circle_0'
                onPress={() => onCircleClick('circle_0')}
            >
                <Animated.View
                    style={{
                        width: 20,
                        height: 20,
                        backgroundColor: interpolatedColorOne,
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        marginRight: 20,
                    }}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                id='circle_1'
                onPress={() => onCircleClick('circle_1')}
            >
                <Animated.View
                    style={{
                        width: 20,
                        height: 20,
                        backgroundColor: interpolatedColorTwo,
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                    }}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                id='circle_2'
                onPress={() => onCircleClick('circle_2')}
            >
                <Animated.View
                    style={{
                        width: 20,
                        height: 20,
                        backgroundColor: interpolatedColorThree,
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        marginLeft: 20,

                    }}
                />
            </TouchableWithoutFeedback>
        </View>;
    }
};


