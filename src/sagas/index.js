import { put, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants/constants';
import { loadUserData } from '../actions/user';
import { hideLoading, showLoading } from '../actions/loading';

function* handleAuthRequest(action) {
    yield put(showLoading());

    yield put(loadUserData({
        token: 'qwerty'
    }));

    yield put(hideLoading());
}

function* sagas() {
    yield [
        takeEvery(constants.SEND_AUTH_REQUEST, handleAuthRequest)
    ]
}

export default sagas;