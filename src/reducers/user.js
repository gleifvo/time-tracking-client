import * as constants from '../constants/constants';

const userData = JSON.parse(sessionStorage.getItem('user'));
const defaultState = {
    isLogged: !!userData,
    ...userData
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USER_DATA:
            return {
                ...state, ...action.payload, isLogged: true
            }
        case constants.LOG_OUT:
            return { isLogged: false };
        default:
            return state;
    }
};

export default user;