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

export const loadReports = (task, reports) => {
    return {
        type: constants.LOAD_REPORTS,
        payload: {
            ...task,
            reports
        }
    }
};

export const fetchReports = (task) => {
    return {
        type: constants.FETCH_REPORTS,
        payload: task
    }
};

export const createOrUpdateReport = (time, report, task) => {
    return {
        type: constants.CREATE_OR_UPDATE_REPORT,
        payload: {
            time,
            report,
            task
        }
    }
};

export const addReport = (report, user, task) => {
    return {
        type: constants.ADD_REPORT,
        payload: {
            report: {
                ...report,
                user
            },
            task
        }
    }
};