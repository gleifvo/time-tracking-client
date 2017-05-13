import * as constants from '../constants';

export const validateTask = (task, resolve, reject) => {
    return {
        type: constants.VALIDATE_TASK,
        payload: {
            ...task,
            resolve,
            reject
        }
    }
};

export const createOrUpdateTask = (task, metadata) => {
    return {
        type: constants.CREATE_OR_UPDATE_TASK,
        payload: {
            task,
            ...metadata
        }
    }
};

export const edit = (payload) => {
    return {
        type: constants.EDIT_TASK,
        payload
    }
}

export const createNew = (project) => {
    return {
        type: constants.CREATE_NEW_TASK,
        payload: {
            project
        }
    }
}