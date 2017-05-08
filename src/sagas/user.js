import api from './client';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, takeEvery } from 'redux-saga/effects';
import { loadUserData } from '../actions/user';

export function* handleAuthRequest(action) {
    yield put(showLoading());

    let { login, password } = action.payload;
    try {
        let response = yield api.post('/api/login', {
            login,
            password
        });

        yield put(loadUserData({
            token: response.headers.token,
            userInfo: response.data
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