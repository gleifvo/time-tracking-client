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

export const validateProject = (data, resolve, reject) => {
    return {
        type: constants.VALIDATE_PROJECT,
        payload: {
            ...data,
            resolve,
            reject
        }
    }
};

export const createProject = (data) => {
    return {
        type: constants.CREATE_PROJECT,
        payload: {
            ...data
        }
    }
}