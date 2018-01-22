import Button from '../components/Button';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    NativeModules,
    NativeEventEmitter,
} from 'react-native';

import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Image,
    Symbol,
    Use,
    Defs,
    Stop,
} from 'react-native-svg';

const {ReactNativeViewManager} = NativeModules;


export default class LandingScreen_2 extends Component {
    render() {
        console.log('LandingScreen_2 props', this.props);
        return (
            <View style={styles.container_2}>
                <Svg
                    style={styles.svg}
                    width="399"
                    height="232"
                    viewBox={'0 0 399 232'}
                    preserveAspectRatio='xMinYMin'
                >
                    <Circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="blue"
                        strokeWidth="2.5"
                        fill="green"
                    />
                    <Rect
                        x="15"
                        y="15"
                        width="70"
                        height="70"
                        stroke="red"
                        strokeWidth="2"
                        fill="yellow"
                    />

                </Svg>
                <Text style={styles.welcome_2}>Hi, {this.props.simpleString}! We're live from React Native!!!</Text>
                <Button label={'CANCEL'} callback={() => this.handleCancel()}/>

            </View>
        );
    }

    handleCancel() {
        console.log('handleCancel');
        ReactNativeViewManager.dismissPresentedViewController(this.props.rootTag);
    }
}


const styles = StyleSheet.create({
    container_1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    container_2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    welcome: {
        fontSize: 20,
        color: 'red',
    },
    welcome_2: {
        fontSize: 20,
        color: 'white',
    },
});