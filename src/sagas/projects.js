import api from './client';
import { loadProjects, loadReport } from '../actions/projects';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, call } from 'redux-saga/effects';
import { UserSelector } from '../selectors';
import { select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

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

export function* fetchReport(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        let response = yield call(api.get, action.payload._links.tasks.href, {
            headers: { token },
            params: { projection: 'reports' }
        });
        let tasks = response.data._embedded.tasks;

        yield put(loadReport(action.payload, tasks));
        yield put(push('/project-report'));
    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}