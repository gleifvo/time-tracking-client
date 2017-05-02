import * as constants from '../constants';

export const hideNotification = () => {
    return {
        type: constants.HIDE_NOTIFICATION
    }
}

export const showNotification = (payload) => {
    return {
        type: constants.SHOW_NOTIFICATION,
        payload
    }
};