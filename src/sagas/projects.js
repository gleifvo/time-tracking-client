import api from './client';
import { loadProjects } from '../actions/projects';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, call } from 'redux-saga/effects';

export function* fetchProjects(action) {
    yield put(showLoading());

    try {
        let response = yield call(api.get, '/api/projects', {
            headers: { token: action.token },
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