import * as constants from '../constants';

const projects = (state = [], action) => {
    switch (action.type) {
        case constants.LOAD_PROJECTS:
            return [...action.payload.projects];
        default:
            return state;
    }
};

export default projects;