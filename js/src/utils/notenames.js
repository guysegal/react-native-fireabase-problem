import * as _ from 'lodash';
import MIDIUtils from 'midiutils';
import { Note } from 'tonal';

const tptFingeringMap = new Map();
tptFingeringMap.set(54, [1, 1, 1]);
tptFingeringMap.set(55, [1, 0, 1]);
tptFingeringMap.set(56, [0, 1, 1]);
tptFingeringMap.set(57, [1, 1, 0]);
tptFingeringMap.set(58, [1, 0, 0]);
tptFingeringMap.set(59, [0, 1, 0]);
tptFingeringMap.set(60, [0, 0, 0]);
tptFingeringMap.set(61, [1, 1, 1]);
tptFingeringMap.set(62, [1, 0, 1]);
tptFingeringMap.set(63, [0, 1, 1]);
tptFingeringMap.set(64, [1, 1, 0]);
tptFingeringMap.set(65, [1, 0, 0]);
tptFingeringMap.set(66, [0, 1, 0]);
tptFingeringMap.set(67, [0, 0, 0]);

tptFingeringMap.set(68, [0, 1, 1]);
tptFingeringMap.set(69, [1, 1, 0]);
tptFingeringMap.set(70, [1, 0, 0]);
tptFingeringMap.set(71, [0, 1, 0]);
tptFingeringMap.set(72, [0, 0, 0]);
tptFingeringMap.set(73, [1, 1, 0]);
tptFingeringMap.set(74, [1, 0, 0]);
tptFingeringMap.set(75, [0, 1, 0]);
tptFingeringMap.set(76, [0, 0, 0]);
tptFingeringMap.set(77, [1, 0, 0]);
tptFingeringMap.set(78, [0, 1, 0]);
tptFingeringMap.set(79, [0, 0, 0]);
tptFingeringMap.set(80, [0, 1, 1]);
tptFingeringMap.set(81, [1, 1, 0]);

tptFingeringMap.set(82, [1, 0, 0]);
tptFingeringMap.set(83, [0, 1, 0]);
tptFingeringMap.set(84, [0, 0, 0]);


export const createPlayableRange = ( lower = 54, upper = 84 ) => {
    const numbers = _.range(lower, upper + 1);
    const name = numbers.map(( d, i ) => {
        const name = MIDIUtils.noteNumberToName(d);
        const midiNumber = d;
        const split = name.split('');
        const noteName = (split.includes('#')) ? `${split[0]}${split[1]}` : split[0];
        const oct = parseInt(name.substr(name.length - 1, 1));
        // console.log(noteName, midiNumber);
        const fingering = tptFingeringMap.get(d);
        return {
            vexFlow: `${noteName.toLowerCase()}/${oct}`,
            vexFlowEnharmonic: `${Note.enharmonic(noteName).toLowerCase()}/${oct}`,
            name: noteName,
            enharmonic: Note.enharmonic(noteName),
            octave: oct,
            fingering,
            midiNumber,
        };
    });

    return name;
};
