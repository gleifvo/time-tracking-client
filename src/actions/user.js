import * as constants from '../constants';

export const sendAuthRequest = (login, password) => {
    return {
        type: constants.SEND_AUTH_REQUEST,
        payload: {
            login,
            password
        }
    }
};

export const loadUserData = (data) => {
    return {
        type: constants.LOAD_USER_DATA,
        payload: data
    }
};

export const logOut = () => {
    return {
        type: constants.LOG_OUT
    }
};

export const loadUsers = (users) => {
    return {
        type: constants.LOAD_USERS,
        payload: {
            users
        }
    }
};

export const fetchUsers = (users) => {
    return {
        type: constants.FETCH_USERS,
        payload: users
    }
};

export const validateLogin = (data, resolve, reject) => {
    return {
        type: constants.VALODATE_LOGIN,
        payload: {
            ...data,
            resolve,
            reject
        }
    }
};


export const createUser = (payload) => {
    return {
        type: constants.CREATE_USER,
        payload
    }
}

export const deleteUser = (user) => {
    return {
        type: constants.DELETE_USER,
        payload: {
            ...user
        }
    }
};

export const removeUser = (user) => {
    return {
        type: constants.REMOVE_USER,
        payload: {
            ...user
        }
    }
};