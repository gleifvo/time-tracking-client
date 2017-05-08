import * as constants from '../constants';

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

export const createOrUpdateProject = (payload) => {
    return {
        type: constants.CREATE_OR_UPDATE_PROJECT,
        payload
    }
}

export const edit = (payload) => {
    return {
        type: constants.EDIT_PROJECT,
        payload
    }
}

export const createNew = (payload) => {
    return {
        type: constants.CREATE_NEW_PROJECT,
        payload
    }
}