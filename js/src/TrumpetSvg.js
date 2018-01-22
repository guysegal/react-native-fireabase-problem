import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, G, Image } from 'react-native-svg';

const tpt = require('./assets/TrumpetSmall.png');
const valve = require('./assets/ValveSmall.png');
const valveTinted = require('./assets/ValveSmallTinted.png');

const TrumpetSvg = () => {
    return <View
        style={{
            width: 399,
            height: 232,
        }}
    >
        <Svg style={[styles.svg, { left: 100, top: 50 }]}
             width='399'
             height='232'
             viewBox={'0 0 399 232'}>
            <Image href={tpt} x='0' y='0' width='100%' height='100%' preserveAspectRatio='xMinYMin'/>


            <Svg style={[styles.svg, styles.valve_1]}
                 width='16'
                 height='20'
                 viewBox={'0 0 16 20'}>
                <Image href={valveTinted} x='0' y='0' width='100%' height='100%'/>
                <Image href={valve} x='0' y='0' width='100%' height='100%' opacity={0}/>
            </Svg>

            <Svg style={[styles.svg, styles.valve_2]}
                 width='16'
                 height='20'
                 viewBox={'0 0 16 20'}>
                <Image href={valveTinted} x='0' y='0' width='100%' height='100%' opacity={0}/>
                <Image href={valve} x='0' y='0' width='100%' height='100%' opacity={1}/>
            </Svg>

            <Svg style={[styles.svg, styles.valve_3]}
                 width='16'
                 height='20'
                 viewBox={'0 0 16 20'}>
                <Image href={valveTinted} x='0' y='0' width='100%' height='100%' opacity={0}/>
                <Image href={valve} x='0' y='0' width='100%' height='100%' opacity={1}/>
            </Svg>
        </Svg>
    </View>;
};

const styles = StyleSheet.create({
    svg: {
        position: 'absolute',
    },
    valve_1: {
        top: 87,
        left: 182.5,
    },
    valve_2: {
        top: 81,
        left: 199,
    },
    valve_3: {
        top: 75,
        left: 214,
    },
});


export default TrumpetSvg;
