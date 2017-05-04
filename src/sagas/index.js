import { put, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import { loadUserData } from '../actions/user';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { loadProjects } from '../actions/projects';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_PATH
});

function* handleAuthRequest(action) {
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

function* fetchProjects(action) {
    yield put(showLoading());

    try {
        let response = yield api.get('/api/projects?projection=user', {
            headers: { 'token': action.token }
        });
        let projects = response.data._embedded.projects;

        yield put(loadProjects(projects));
    } catch (error) {
        console.error(error);
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}

function* sagas() {
    yield [
        takeEvery(constants.SEND_AUTH_REQUEST, handleAuthRequest),
        takeEvery(constants.FETCH_PROJECTS, fetchProjects)
    ]
}

export default sagas;