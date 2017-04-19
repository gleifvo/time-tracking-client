import * as constants from '../constants/constants';

const user = (state = { isLogged: false }, action) => {
    switch (action.type) {
        case constants.LOAD_USER_DATA:
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
};

export default user;