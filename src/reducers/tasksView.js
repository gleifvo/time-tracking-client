import * as constants from '../constants';

const defaultState = {
    tasks: []
}

const tasksView = (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_TASKS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
};

export default tasksView;