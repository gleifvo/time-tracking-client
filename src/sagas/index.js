import { takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import { fetchProjects, validateProject, createOrUpdateProject, deleteProject } from './projects';
import { handleAuthRequest, fetchUsers, fetchProjectUsers } from './user';

function* sagas() {
    yield [
        takeEvery(constants.SEND_AUTH_REQUEST, handleAuthRequest),
        takeEvery(constants.FETCH_PROJECTS, fetchProjects),
        takeEvery(constants.VALIDATE_PROJECT, validateProject),
        takeEvery(constants.CREATE_OR_UPDATE_PROJECT, createOrUpdateProject),
        takeEvery(constants.DELETE_PROJECT, deleteProject),
        takeEvery(constants.FETCH_USERS, fetchUsers),
        takeEvery(constants.FETCH_PROJECT_FOR_EDIT, fetchProjectUsers)
    ]
}

export default sagas;