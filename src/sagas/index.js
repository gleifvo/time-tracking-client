import { put, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants/constants';
import { loadUserData } from '../actions/user';

function* handleAuthRequest(action) {
    yield put(loadUserData({
        isLogged: true,
        token: 'qwerty'
    }));
}

function* sagas() {
    yield [
        takeEvery(constants.SEND_AUTH_REQUEST, handleAuthRequest)
    ]
}

export default sagas;