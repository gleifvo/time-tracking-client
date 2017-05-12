import * as constants from '../constants';

export const fetchTasks = (project) => {
    return {
        type: constants.FETCH_TASKS,
        payload: {
            ...project
        }
    }
};

export const loadTasks = (tasks, project) => {
    return {
        type: constants.LOAD_TASKS,
        payload: {
            tasks,
            project
        }
    }
};