'use strict';
// 1
import React from 'react';
import ReactNative, {
    AppRegistry,
    Animated,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    NativeEventEmitter,
} from 'react-native';

import Button from './components/Button';
import Rating from './components/Rating';

const {AddRatingManager} = NativeModules;

class AddRatingApp extends React.Component {
    constructor(props) {
        super(props);
        this._subscription = null;
        this.state = {
            identifier: props.identifier,
            currentRating: props.currentRating,
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.onRatingSelected = this.onRatingSelected.bind(this);
    }

    componentDidMount() {
        const AddRatingManagerEvent = new NativeEventEmitter(AddRatingManager);
        this._subscription = AddRatingManagerEvent.addListener('AddRatingManagerEvent',
            (info) => {
                console.log(JSON.stringify(info));
            });
    }

    componentWillUnmount() {
        this._subscription.remove();
    }

    render() {
        const saveButton = this.renderSaveButton();
        return (
            <View style={styles.container}>
                <Rating
                    rating={this.state.currentRating}
                    ratingSelectionHandler={(sel) => this.onRatingSelected(sel)}
                />
                <Text style={styles.welcome}>We're live now from React Native!!!</Text>
                <Button label={'CANCEL'} callback={() => this.handleCancel()}/>
                {saveButton}
            </View>
        );
    }

    renderSaveButton() {
        console.log('renderSaveButton', this.state.currentRating);
        if (this.state.currentRating > 0) {
            return <Button label={'SAVE'} callback={() => this.handleSave()}/>;
        } else {
            return null;
        }
    }

    handleCancel() {
        console.log('handleCancel');
        AddRatingManager.dismissPresentedViewController(this.props.rootTag);
    }

    handleSave() {
        console.log('handleSave');
        AddRatingManager.save(this.props.rootTag, this.state.currentRating, this.state.identifier);

    }

    onRatingSelected(selectedRating) {
        console.log("Rating selected: " + selectedRating);
        this.setState({currentRating: selectedRating});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'goldenrod',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    welcome: {
        fontSize: 20,
        color: 'white',
    },
    navBar: {
        backgroundColor: '#25507b',
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10,
    },
    navBarTitleText: {
        color: 'white',
        fontWeight: '500',
        marginVertical: 9,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        color: 'white',
    },
});

export default AddRatingApp;