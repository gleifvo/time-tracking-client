import * as constants from '../constants';

export const showConfirmation = (labels, handleConfirm) => {
    return {
        type: constants.SHOW_CONFIRMATION,
        payload: {
            ...labels,
            handleConfirm
        }
    }
}

export const closeConfirmation = () => {
    return {
        type: constants.CLOSE_CONFIRMATION
    }
}