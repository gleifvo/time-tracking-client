import * as constants from '../constants';

export const loadProjects = (projects) => {
    return {
        type: constants.LOAD_PROJECTS,
        payload: {
            projects
        }
    }
};

export const fetchProjects = () => {
    return {
        type: constants.FETCH_PROJECTS
    }
};