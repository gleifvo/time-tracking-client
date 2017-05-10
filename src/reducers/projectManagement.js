import * as constants from '../constants';

const defaultState = {
    isNew: true,
    name: '',
    users: []
}

const projectManagement = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CREATE_NEW_PROJECT:
            return { ...state, ...defaultState };
        case constants.EDIT_PROJECT:
            return { ...state, ...action.payload, isNew: false };
        default:
            return state;
    }
};

export default projectManagement;