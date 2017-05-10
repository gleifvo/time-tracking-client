import * as constants from '../constants';

const defaultState = {
    users: []
}

const metadata = (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USERS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default metadata;