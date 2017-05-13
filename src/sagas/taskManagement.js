import api from './client';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { UserSelector } from '../selectors';
import { select } from 'redux-saga/effects';

export function* validateTask(action) {
    try {
        const token = yield select(UserSelector.getToken);

        let response = yield call(api.get, '/api/tasks/search/existsByName', {
            headers: { token },
            params: { name: action.payload.name }
        });

        if (response.data.isExist) {
            action.payload.reject({ name: 'Task with same name already exist' });
            return;
        }

        action.payload.resolve();
    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }
}

export function* createOrUpdateTask(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);
    const user = yield select(UserSelector.getUserHref);

    try {
        yield action.payload.isNew
            ? call(api.post, '/api/tasks', {
                ...action.payload, user
            }, { headers: { token } })
            : call(api.patch, action.payload.href, {
                ...action.payload.formData
            }, { headers: { token } });

        yield put(push('/project-tasks'));
    } catch (error) {
        (error.response && error.response.status === 403)
            ? yield put(showNotification({
                message: "You can't create a task for this project",
                time: 15000
            }))
            : yield put(showNotification({
                message: 'Server error'
            }))
    }

    yield put(hideLoading());
}