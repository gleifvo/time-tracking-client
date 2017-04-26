import { put, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants/constants';
import { loadUserData } from '../actions/user';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification'
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_PATH
});

function* handleAuthRequest(action) {
    yield put(showLoading());

    let { login, password } = action.payload;
    try {
        let response = yield api.post('/login', {
            login,
            password
        });

        yield put(loadUserData({
            token: response.headers.token
        }));

    } catch (error) {
        if (error.response) {
            yield put(showNotification({
                message: 'Invalid credentials'
            }));
        } else {
            yield put(showNotification({
                message: 'Server error'
            }));
        }
    }

    yield put(hideLoading());
}

function* sagas() {
    yield [
        takeEvery(constants.SEND_AUTH_REQUEST, handleAuthRequest)
    ]
}

export default sagas;