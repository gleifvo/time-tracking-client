import * as constants from '../constants/constants';

const defaultState = {
    isActive: false
}

const loading = (state = defaultState, action) => {
    switch (action.type) {
        case constants.HIDE_LOADING_BAR:
            return defaultState;
        case constants.SHOW_LOADING_BAR:
            return {
                isActive: true
            }
        default:
            return state;

    }
}

export default loading;