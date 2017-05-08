import * as constants from '../constants';

const defaultState = {
    open: false
}

const confirmation = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SHOW_CONFIRMATION:
            return {
                ...action.payload, open: true
            };
        case constants.CLOSE_CONFIRMATION:
            return defaultState;
        default:
            return state;
    }
}

export default confirmation;