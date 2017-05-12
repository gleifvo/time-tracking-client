import * as constants from '../constants';

const defaultState = {
    project: {},
    tasks: []
}

const tasks = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default tasks;