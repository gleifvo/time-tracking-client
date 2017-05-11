import api from './client';
import { loadProjects } from '../actions/projects';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, call } from 'redux-saga/effects';
import { UserSelector } from '../selectors';
import { select } from 'redux-saga/effects';

export function* fetchProjects(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        let response = yield call(api.get, '/api/projects', {
            headers: { token },
            params: { projection: 'user' }
        });
        let projects = response.data._embedded.projects;

        yield put(loadProjects(projects));
    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}