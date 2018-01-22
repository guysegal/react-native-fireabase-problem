import React, { Component } from 'react';
import { View, Image } from 'react-native';

const tpt = require('./assets/TrumpetSmall.png');
import Valve from './Valve';
import { inject, observer } from 'mobx-react/native';

@inject('fingeringPickerStore') @observer
export default class Trumpet extends Component {

    render() {
        const { animationOne, animationTwo, animationThree } = this.props;
        return <View
            style={{
                width: 399,
                height: 232,
            }}>
            <Image source={tpt}
                   style={{ position: 'absolute', left: 0, top: 0 }}
            />
            <Valve left={182.5} top={86} animation={animationOne}/>
            <Valve left={198.5} top={80} animation={animationTwo}/>
            <Valve left={214} top={75} animation={animationThree}/>
        </View>;
    }
}
