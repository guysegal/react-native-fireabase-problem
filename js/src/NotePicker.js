import React, { Component } from 'react';
import * as notenames from './utils/notenames';
import AnimationObservable from './mobx/animation';
import { observer, inject } from 'mobx-react/native';

import {
    StyleSheet,
    Text,
    View,
    Picker,
    PickerIOS,
    Animated,
    Dimensions,
} from 'react-native';
import fingeringPickerStore from './mobx/store';

@inject('fingeringPickerStore') @observer
export default class NotePicker extends Component {
    constructor( props ) {
        super(props);
        this.createPickerItems = this.createPickerItems.bind(this);
    }

    createPickerItems() {
        return fingeringPickerStore.allItems.map(( d, i ) => {
            const label = (d.enharmonic == d.name) ? `${d.name} ${d.octave}` : `${d.name}/${d.enharmonic} ${d.octave}`;
            return <Picker.Item
                key={i}
                value={d.midiNumber}
                item={d}
                label={label}/>;
        });
    }

    render() {
        const selectedItem = fingeringPickerStore.selectedItem;
        const pickerItems = this.createPickerItems();
        console.log('pickerItems', fingeringPickerStore);
        return <View style={[styles.container, { marginLeft: 25 }]}>
            <Picker style={{ width: 200, height: 200 }} itemStyle={{ height: 120 }}
                    selectedValue={selectedItem}
                    onValueChange={item => fingeringPickerStore.setSelectedItem(item)}
                    style={{ width: 160 }}
                    mode="dropdown">
                {pickerItems}
            </Picker>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});
