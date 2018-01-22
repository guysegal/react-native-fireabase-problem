import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Accidental } from 'vexflow/src/accidental';
import { Stave } from 'vexflow/src/stave';
import { StaveNote } from 'vexflow/src/stavenote';
import { Voice } from 'vexflow/src/voice';
import { Formatter } from 'vexflow/src/formatter';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
import { inject, observer } from 'mobx-react/native';

@inject('fingeringPickerStore') @observer
export default class NoteDisplay extends Component {
    constructor(props) {
        super(props);
    }

    runVexFlowCode(context) {
        const {selectedItem} = this.props;
        const stave = new Stave(110, 140, (selectedItem.name === selectedItem.enharmonic) ? 120 : 190);
        stave.setContext(context);
        // stave.setClef('treble');
        stave.draw();
        console.log('context', context, 'ReactNativeSVGContext', selectedItem);
        // stave.setTimeSignature('4/4');
        // stave.setText('VexFlow on React Native!', 3);
        let notes;


        notes = (selectedItem.name === selectedItem.enharmonic) ? this.getDiatonicNote(selectedItem) : this.getChromaticNote(selectedItem);

        const voice = (selectedItem.name === selectedItem.enharmonic) ? new Voice({
            num_beats: 2,
            beat_value: 2,
        }) : new Voice({num_beats: 4, beat_value: 2});
        voice.addTickables(notes);

        const formatter = new Formatter().joinVoices([ voice ]).formatToStave([ voice ], stave);
        voice.draw(context, stave);
    }

    getDiatonicNote(selectedItem) {
        return [
            new StaveNote({clef: "treble", keys: [ selectedItem.vexFlow ], duration: "w"}),
        ];
    }

    getChromaticNote(selectedItem) {
        return [
            new StaveNote({
                clef: "treble",
                keys: [ selectedItem.vexFlow ],
                duration: "w",
            }).addAccidental(0, new Accidental((selectedItem.vexFlow.indexOf('#') !== -1) ? '#' : 'b')),
            new StaveNote({
                clef: "treble",
                keys: [ selectedItem.vexFlowEnharmonic ],
                duration: "w",
            }).addAccidental(0, new Accidental((selectedItem.vexFlowEnharmonic.indexOf('#') !== -1) ? '#' : 'b')),
        ];
    }

    render() {
        const context = new ReactNativeSVGContext(NotoFontPack, {width: 350, height: 400});
        this.runVexFlowCode(context);

        return (
            <View>
                <Text>RENDER</Text>
                {context.render()}
            </View>
        );
    }

    renderContext(context) {
        try {
            console.log('renderContext', context);
            context.render();
        }
        catch (e) {
            console.log('============ error', e);
        }
    }
}
