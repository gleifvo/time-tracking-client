import { takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import { fetchProjects, validateProject, createOrUpdateProject } from './projects';
import { handleAuthRequest } from './user';

function* sagas() {
    yield [
        takeEvery(constants.SEND_AUTH_REQUEST, handleAuthRequest),
        takeEvery(constants.FETCH_PROJECTS, fetchProjects),
        takeEvery(constants.VALIDATE_PROJECT, validateProject),
        takeEvery(constants.CREATE_OR_UPDATE_PROJECT, createOrUpdateProject)
    ]
}

export default sagas;