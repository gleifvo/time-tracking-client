import * as constants from '../constants/constants'

export const tokenStorageMiddleware = store => next => action => {

    switch (action.type) {
        case constants.LOG_OUT:
            sessionStorage.removeItem('token');
            break;
        case constants.LOAD_USER_DATA:
            sessionStorage.setItem('token', action.payload.token);
            break;
    }

    next(action);
}