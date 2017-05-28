import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import * as projectSagas from './projects';
import * as userSagas from './user';
import * as projectManagementSagas from './projectManagement';
import * as taskManagementSagas from './taskManagement';
import * as tasksSagas from './tasks';

function* sagas() {
    yield [
        takeLatest(constants.FETCH_PROJECTS, projectSagas.fetchProjects),
        takeLatest(constants.FETCH_REPORT, projectSagas.fetchReport),

        takeLatest(constants.SEND_AUTH_REQUEST, userSagas.handleAuthRequest),
        takeLatest(constants.FETCH_USERS, userSagas.fetchUsers),
        takeLatest(constants.VALODATE_LOGIN, userSagas.validateLogin),
        takeLatest(constants.CREATE_USER, userSagas.createUser),
        takeEvery(constants.DELETE_USER, userSagas.deleteUser),

        takeLatest(constants.VALIDATE_PROJECT, projectManagementSagas.validateProject),
        takeEvery(constants.DELETE_PROJECT, projectManagementSagas.deleteProject),
        takeLatest(constants.FETCH_PROJECT_FOR_EDIT, projectManagementSagas.fetchProjectUsers),
        takeLatest(constants.CREATE_OR_UPDATE_PROJECT, projectManagementSagas.createOrUpdateProject),

        takeLatest(constants.FETCH_TASKS, tasksSagas.fetchTasks),
        takeEvery(constants.DELETE_TASK, tasksSagas.deleteTask),
        takeEvery(constants.FETCH_REPORTS, tasksSagas.fetchReports),
        takeLatest(constants.CREATE_OR_UPDATE_REPORT, tasksSagas.createOrUpdateReport),

        takeLatest(constants.VALIDATE_TASK, taskManagementSagas.validateTask),
        takeLatest(constants.CREATE_OR_UPDATE_TASK, taskManagementSagas.createOrUpdateTask),
    ]
}

export default sagas;