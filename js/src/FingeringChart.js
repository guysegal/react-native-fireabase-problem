import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Modal,
    TouchableHighlight,
} from 'react-native';

import * as notenames from './utils/notenames';
import { inject, observer } from 'mobx-react/native';
import fingeringPickerStore from './mobx/store';

import AnimationObservable from './mobx/animation';

import Trumpet from './Trumpet';
import Fingering from './Fingering';
import NoteDisplay from './NoteDisplay';

@inject('fingeringPickerStore') @observer
export default class FingeringChart extends Component {
    constructor(props) {
        super(props);
        const {fingeringItems, selectedItem} = props;

        this.onCirclePress = this.onCirclePress.bind(this);
        this.state = {
            fingeringItems,
            selectedItem,
        };
    }

    componentWillReact() {
        this.updateAnimations();
    }

    componentWillMount() {
        this.updateAnimations();
    }

    updateAnimations() {

        const selectedItem = fingeringPickerStore.selected;
        const fingering = selectedItem.fingering.peek();
        console.log('updateAnimations', fingering);
        this.positionOne = new AnimationObservable((fingering[ 0 ] === 1) ? 0 : 1, fingering[ 0 ]);
        this.positionTwo = new AnimationObservable((fingering[ 1 ] === 1) ? 0 : 1, fingering[ 1 ]);
        this.positionThree = new AnimationObservable((fingering[ 2 ] === 1) ? 0 : 1, fingering[ 2 ]);

        /*        if (fingering[0] === 0) {
         this.positionOne.setValue(fingering[0]);
         }
         if (fingering[1] === 0) {
         this.positionTwo.setValue(fingering[1]);
         }
         if (fingering[2] === 0) {
         this.positionThree.setValue(fingering[2]);
         }*/

        this.positionOne.start();
        this.positionTwo.start();
        this.positionThree.start();
    }

    getSelectedItem() {
        const {fingeringItems, selectedItem} = this.state;
        return this.props.fingeringItems[ this.props.selectedItem ];
    }

    render() {
        // 399, 232
        // 16, 20
        const selectedItem = fingeringPickerStore.selected;
        const label = (selectedItem.enharmonic == selectedItem.name) ? `${selectedItem.name} ${selectedItem.octave}` : `${selectedItem.name}/${selectedItem.enharmonic} ${selectedItem.octave}`;

        return (
            <View style={[ this.props.style, styles.container ]}>
                <View style={styles.leftPanel}>
                    <NoteDisplay selectedItem={selectedItem}/>
                </View>
                <View style={styles.rightPanel}>
                    <Text style={styles.label}>
                        {label}
                    </Text>
                    <View
                        style={{
                            width: 399,
                            height: 232,
                            overflow: 'hidden',
                            margin: 10,
                        }}
                    >
                        <Trumpet animationOne={this.positionOne}
                                 animationTwo={this.positionTwo}
                                 animationThree={this.positionThree}
                        />

                    </View>
                    <Fingering style={styles.fingering}
                               animationOne={this.positionOne}
                               animationTwo={this.positionTwo}
                               animationThree={this.positionThree}
                               onCirclePress={(which, animateTo) => this.onCirclePress(which, animateTo)}/>
                </View>
            </View>
        );
    }

    onCirclePress(which, animateTo) {
        console.log('click', which, animateTo);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fingering: {
        flexDirection: 'row',
    },
    leftPanel: {
        flex: 0.5,
        alignItems: 'center',
    },
    rightPanel: {
        flex: 1,
        alignItems: 'center',

    },
    label: {
        fontWeight: '700',
        fontSize: 24,
    },
    pickNewNote: {
        position: 'absolute',
    },
});
