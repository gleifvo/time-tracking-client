import api from './client';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, call } from 'redux-saga/effects';
import { loadUserData, loadUsers } from '../actions/user';

export function* handleAuthRequest(action) {
    yield put(showLoading());

    let { login, password } = action.payload;
    try {
        let response = yield call(api.post, '/api/login', {
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

export function* fetchUsers(action) {
    yield put(showLoading());

    try {
        let response = yield call(api.get, '/api/users', {
            headers: { token: action.token }
        });

        let users = response.data._embedded.users;

        yield put(loadUsers(users));
    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}