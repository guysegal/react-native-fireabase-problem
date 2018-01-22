import React, { Component } from 'react';
import {
    NativeModules,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Provider } from 'mobx-react';

import FingeringChart from '../src/FingeringChart';
import NotePicker from '../src/NotePicker';
import * as notenames from '../src/utils/notenames';
import fingeringPickerStore from '../src/mobx/store';

import Button from '../components/Button';
const {ReactNativeViewManager} = NativeModules;


export default class LandingScreen_1 extends Component {
    constructor(props) {
        super(props);
        // fingeringPickerStore.setSelectedItem(this.props.midiNumber);
    }

    componentWillMount() {

    }

    render() {
        fingeringPickerStore.setSelectedItem(parseInt(this.props.midiNumber));
        console.log('LandingScreen_1 props', parseInt(this.props.midiNumber), fingeringPickerStore);
        return <Provider fingeringPickerStore={fingeringPickerStore}>
            <View style={[ styles.container ]}>
                <FingeringChart
                    style={[ styles.fingering ]}
                    fingeringItems={fingeringPickerStore.allItems}
                    selectedItem={fingeringPickerStore.selectedItem}
                />
                {/*<NotePicker style={[ styles.picker ]}/>*/}
                <Button label={'CANCEL'} callback={() => this.handleCancel()}/>

            </View>
        </Provider>;

        /*        return (
         <View style={styles.container_1}>
         <Text style={styles.welcome}>We're live from React Native!!!</Text>
         <Text style={styles.welcome}>We should render Midi Note {this.props.midiNumber}</Text>
         <Button label={'CANCEL'} callback={() => this.handleCancel()}/>

         </View>
         );*/
    }


    handleCancel() {
        console.log('handleCancel');
        ReactNativeViewManager.dismissPresentedViewController(this.props.rootTag);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    picker: {
        position: 'absolute',
        flex: 1,
        top: 0,

    },
    fingering: {
        position: 'absolute',
        flex: 1,
        top: 0,
    },
});

/*
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
 });*/
