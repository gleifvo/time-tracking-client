import { takeLatest } from 'redux-saga/effects';
import * as constants from '../constants';
import { fetchProjects } from './projects';
import { handleAuthRequest, fetchUsers } from './user';
import * as projectManagSagas from './projectManagement';

function* sagas() {
    yield [
        takeLatest(constants.SEND_AUTH_REQUEST, handleAuthRequest),
        takeLatest(constants.FETCH_PROJECTS, fetchProjects),
        takeLatest(constants.FETCH_USERS, fetchUsers),
        takeLatest(constants.VALIDATE_PROJECT, projectManagSagas.validateProject),
        takeLatest(constants.DELETE_PROJECT, projectManagSagas.deleteProject),
        takeLatest(constants.FETCH_PROJECT_FOR_EDIT, projectManagSagas.fetchProjectUsers),
        takeLatest(constants.CREATE_OR_UPDATE_PROJECT, projectManagSagas.createOrUpdateProject)
    ]
}

export default sagas;