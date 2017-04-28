import * as constants from '../constants/constants'

export const tokenStorageMiddleware = store => next => action => {

    switch (action.type) {
        case constants.LOG_OUT:
            sessionStorage.removeItem('user');
            break;
        case constants.LOAD_USER_DATA:
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            break;
    }

    next(action);
}