import * as constants from '../constants';

export const showConfirmation = (labels, action) => {
    return {
        type: constants.SHOW_CONFIRMATION,
        payload: {
            ...labels,
            action
        }
    }
}

export const closeConfirmation = () => {
    return {
        type: constants.CLOSE_CONFIRMATION
    }
}