import * as constants from '../constants';

export const fetchTasks = (project) => {
    return {
        type: constants.FETCH_TASKS,
        payload: project

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

export const deleteTask = (task) => {
    return {
        type: constants.DELETE_TASK,
        payload: task
    }
};

export const removeTask = (task) => {
    return {
        type: constants.REMOVE_TASK,
        payload: task
    }
};