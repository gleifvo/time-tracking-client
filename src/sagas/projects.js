import api from './client';
import { loadProjects } from '../actions/projects';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

export function* fetchProjects(action) {
    yield put(showLoading());

    try {
        let response = yield api.get('/api/projects', {
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

export function* createProject(action) {
    yield put(showLoading());

    try {
        let response = yield api.post('/api/projects', {
            ...action.payload
        }, { headers: { token: action.token } });
        yield put(push('/projects'));

    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}


export function* validateProject(action) {
    try {
        let response = yield api.get('/api/projects/search/existsByName', {
            headers: { token: action.token },
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