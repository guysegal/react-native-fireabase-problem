import { observable, action, computed } from 'mobx';
import * as notenames from '../utils/notenames';

let index = 0;

class ObservableStore {
    @observable list = [];
    @observable allItems;
    @observable selectedItem;

    constructor(midiNote = 61) {
        this.allItems = notenames.createPlayableRange();
        this.selectedItem = 61;
    }

    @computed get selected() {
        const selected = this.allItems.filter(( d, i ) => {
            return d.midiNumber === this.selectedItem;
        });
        return selected[0];
        // return this.allItems[this.selectedItem];
    }

    @action setSelectedItem( index ) {
        this.selectedItem = index;
    }
}


const FingeringPickerStore = new ObservableStore();

export default FingeringPickerStore;
