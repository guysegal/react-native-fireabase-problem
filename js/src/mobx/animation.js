import {
    Animated, Easing,
} from 'react-native';

import { observable, action, useStrict } from 'mobx';
import remotedev from 'mobx-remotedev';

useStrict(true);

@remotedev({
    name: 'AnimationObservable',
    // Options: https://github.com/zalmoxisus/mobx-remotedev#api
})

class AnimationObservable {
    @observable animatedValue;
    @observable timing;
    @observable interpolated;
    @observable inputRange;
    @observable outputRange;

    constructor( initVal = 0, toVal = 1, duration = 400 ) {
        this.initDuration = duration;
        this.initToVal = toVal;
        this.animatedValue = new Animated.Value(initVal);
        this.setTimingTo(toVal, duration);
    }

    @action getValue() {
        return this.animatedValue;
    }

    @action setValue( val ) {
        this.animatedValue.setValue(val);
    }

    @action getTiming() {
        return this.timing;
    }

    @action setTimingTo( toVal, duration, delay = 100 ) {
        const dur = (duration) ? duration : this.initDuration;
        const val = (toVal) ? toVal : this.initToVal;
        this.timing = Animated.timing(this.animatedValue, {
            toValue: toVal,
            duration: dur,
            delay: delay,
        });
    }

    @action start() {
        return this.timing.start();
    }

    @action stop() {
        return this.animatedValue.stopAnimation();
    }

    @action reset() {
        return this.timing.reset();
    }

}

export default AnimationObservable;
