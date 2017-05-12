import api from './client';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, call } from 'redux-saga/effects';
import { loadUserData, loadUsers } from '../actions/user';
import { UserSelector } from '../selectors';
import { select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { closeConfirmation } from '../actions/confirmation';
import { removeUser } from '../actions/user';
import { batchActions } from 'redux-batched-actions';

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
    const token = yield select(UserSelector.getToken);

    try {
        let response = yield call(api.get, '/api/users', {
            headers: { token }
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

export function* validateLogin(action) {
    try {
        const token = yield select(UserSelector.getToken);
        let response = yield call(api.get, '/api/users/search/existsByLogin', {
            headers: { token },
            params: { login: action.payload.login }
        });

        if (response.data.isExist) {
            action.payload.reject({ login: 'Login already exist' });
            return;
        }

        action.payload.resolve();
    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }
}

export function* createUser(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        yield call(api.post, '/api/users', {
            ...action.payload
        }, { headers: { token } })

        yield put(push('/users'));

    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}

export function* deleteUser(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        yield call(api.delete, action.payload._links.self.href, {
            headers: { token }
        });

        yield put(batchActions([
            removeUser({ ...action.payload }),
            closeConfirmation()
        ]));

    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}