import * as constants from '../constants';

const defaultState = {
    isNew: true
}

const taskManagement = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CREATE_NEW_TASK:
            return { ...defaultState, ...action.payload };
        case constants.EDIT_TASK:
            return { ...state, ...action.payload, isNew: false };
        default:
            return state;
    }
};

export default taskManagement;