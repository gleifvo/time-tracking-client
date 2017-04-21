import * as constants from '../constants/constants';

const defaultState = {
    isActive: true
}

const loading = (state = defaultState, action) => {
    switch (action.type) {
        case constants.HIDE_LOADING_BAR:
            return defaultState;
        case constants.SHOW_LOADING_BAR:
            return {
                isActive: false
            }
        default:
            return state;

    }
}

export default loading;