import api from './client';
import { removeProject } from '../actions/projects';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { closeConfirmation } from '../actions/confirmation';
import { put, call } from 'redux-saga/effects';
import { batchActions } from 'redux-batched-actions';
import { edit } from '../actions/projectManagement';
import { push } from 'react-router-redux';
import { UserSelector } from '../selectors';
import { select } from 'redux-saga/effects';


export function* createOrUpdateProject(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        yield action.payload.isNew
            ? call(api.post, '/api/projects', {
                ...action.payload.formData
            }, { headers: { token } })
            : call(api.patch, action.payload.href, {
                ...action.payload.formData
            }, { headers: { token } });

        yield put(push('/projects'));

    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}

export function* deleteProject(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        yield call(api.delete, action.payload._links.self.href, {
            headers: { token }
        });

        yield put(batchActions([
            removeProject({ ...action.payload }),
            closeConfirmation()
        ]));

    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}

export function* validateProject(action) {
    try {
        const token = yield select(UserSelector.getToken);
        let response = yield call(api.get, '/api/projects/search/existsByName', {
            headers: { token },
            params: { name: action.payload.name }
        });

        if (response.data.isExist) {
            action.payload.reject({ name: 'Project already exist' });
            return;
        }

        action.payload.resolve();
    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }
}

export function* fetchProjectUsers(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        let response = yield call(api.get, action.payload._links.users.href, {
            headers: { token }
        });

        let users = response.data._embedded.users
            .map(user => user._links.self.href);

        yield put(edit({ ...action.payload, users }));
        yield put(push('/project-management'));

    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}