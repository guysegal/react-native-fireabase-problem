'use strict';
// 1
import React, { Component } from 'react';
import ReactNative, {
    AppRegistry,
} from 'react-native';


import LandingScreen_1 from './containers/LandingScreen_1'
import LandingScreen_2 from './containers/LandingScreen_2'

AppRegistry.registerComponent('LandingScreen_1', () => LandingScreen_1);
AppRegistry.registerComponent('LandingScreen_2', () => LandingScreen_2);