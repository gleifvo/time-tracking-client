import * as constants from '../constants/constants';

export const sendAuthRequest = (login, password) => {
    return {
        type: constants.SEND_AUTH_REQUEST,
        payload: {
            login,
            password
        }
    }
};

export const loadUserData = (data) => {
    return {
        type: constants.LOAD_USER_DATA,
        payload: data
    }
};