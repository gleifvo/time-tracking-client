import * as constants from '../constants/constants';

const defaultState = {
    isLogged: false
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USER_DATA:
            return {
                ...state, ...action.payload
            }
        case constants.LOG_OUT:
            return defaultState;
        default:
            return state;
    }
};

export default user;