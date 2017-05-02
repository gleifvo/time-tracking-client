import * as constants from '../constants';

export const showLoading = () => {
    return {
        type: constants.SHOW_LOADING_BAR,
    }
};

export const hideLoading = () => {
    return {
        type: constants.HIDE_LOADING_BAR,
    }
};