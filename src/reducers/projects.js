import * as constants from '../constants';

const projects = (state = [], action) => {
    switch (action.type) {
        case constants.LOAD_PROJECTS:
            return [...action.payload.projects];
        case constants.REMOVE_PROJECT:
            return state.filter(project => project.name !== action.payload.name);
        default:
            return state;
    }
};

export default projects;