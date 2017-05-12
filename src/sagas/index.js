import { takeLatest } from 'redux-saga/effects';
import * as constants from '../constants';
import { fetchProjects } from './projects';
import * as userSagas from './user';
import * as projectManagSagas from './projectManagement';
import * as tasksSagas from './tasks';

function* sagas() {
    yield [
        takeLatest(constants.FETCH_PROJECTS, fetchProjects),

        takeLatest(constants.SEND_AUTH_REQUEST, userSagas.handleAuthRequest),
        takeLatest(constants.FETCH_USERS, userSagas.fetchUsers),
        takeLatest(constants.VALODATE_LOGIN, userSagas.validateLogin),
        takeLatest(constants.CREATE_USER, userSagas.createUser),
        takeLatest(constants.DELETE_USER, userSagas.deleteUser),

        takeLatest(constants.VALIDATE_PROJECT, projectManagSagas.validateProject),
        takeLatest(constants.DELETE_PROJECT, projectManagSagas.deleteProject),
        takeLatest(constants.FETCH_PROJECT_FOR_EDIT, projectManagSagas.fetchProjectUsers),
        takeLatest(constants.CREATE_OR_UPDATE_PROJECT, projectManagSagas.createOrUpdateProject),

        takeLatest(constants.FETCH_TASKS, tasksSagas.fetchTasks),
    ]
}

export default sagas;