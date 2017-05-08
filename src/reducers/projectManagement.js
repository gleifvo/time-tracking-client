import * as constants from '../constants';

const defaultState = {
    isNew: true,
    name: ''
}

const projectManagement = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CREATE_NEW_PROJECT:
            return defaultState;
        case constants.EDIT_PROJECT:
            return { ...action.payload, isNew: false };
        default:
            return state;
    }
};

export default projectManagement;