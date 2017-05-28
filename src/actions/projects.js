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

export const deleteProject = (project) => {
    return {
        type: constants.DELETE_PROJECT,
        payload: project

    }
};

export const removeProject = (project) => {
    return {
        type: constants.REMOVE_PROJECT,
        payload: project
    }
};

export const fetchReport = (project) => {
    return {
        type: constants.FETCH_REPORT,
        payload: project
    }
};

export const loadReport = (project, tasks) => {
    return {
        type: constants.LOAD_REPORT,
        payload: {
            project,
            tasks
        }
    }
};