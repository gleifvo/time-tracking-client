import * as constants from '../constants';

const defaultState = {
    open: false,
    message: '',
    time: 4000
}

const notification = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SHOW_NOTIFICATION:
            return {
                ...defaultState, ...action.payload, open: true
            };
        case constants.HIDE_NOTIFICATION:
            return defaultState;
        default:
            return state;

    }
}

export default notification;