import api from './client';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, call } from 'redux-saga/effects';
import { UserSelector } from '../selectors';
import { select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { loadTasks, removeTask, loadReports, addReport } from '../actions/tasks';
import { batchActions } from 'redux-batched-actions';
import { closeConfirmation } from '../actions/confirmation';

export function* fetchTasks(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        let response = yield call(api.get, action.payload._links.tasks.href, {
            headers: { token },
            params: { projection: 'user' }
        });
        let tasks = response.data._embedded.tasks;

        yield put(loadTasks(tasks, action.payload));
        yield put((push('/project-tasks')));
    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }));
    }

    yield put(hideLoading());
}

export function* deleteTask(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        yield call(api.delete, action.payload._links.self.href, {
            headers: { token }
        });

        yield put(batchActions([
            removeTask(action.payload),
            closeConfirmation()
        ]));
    } catch (error) {
        (error.response && error.response.status === 403)
            ? yield put(showNotification({
                message: "You can't create a task for this project",
                time: 15000
            }))
            : yield put(showNotification({
                message: 'Server error'
            }))
    }

    yield put(hideLoading());
}

export function* fetchReports(action) {
    const token = yield select(UserSelector.getToken);

    try {
        let response = yield call(api.get, action.payload._links.reports.href, {
            headers: { token },
            params: { projection: 'user' }
        });
        yield put(loadReports(action.payload, response.data._embedded.reports))
    } catch (error) {
        yield put(showNotification({
            message: 'Server error'
        }))
    }
}

export function* createOrUpdateReport(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);
    const user = yield select(UserSelector.getUserHref);
    const userData = yield select(UserSelector.getUserData);
    const isNew = !action.payload.report._links;

    try {
        let response = yield isNew
            ? call(api.post, '/api/reports', {
                time: action.payload.time, user, task: action.payload.task._links.self.href
            }, { headers: { token } })
            : call(api.patch, action.payload.report._links.self.href, {
                time: action.payload.time
            }, { headers: { token } });

        isNew && (yield put(addReport(response.data, userData, action.payload.task)));

        yield put(showNotification({
            message: isNew ? 'Report created' : 'Report updated'
        }))
    } catch (error) {
        (error.response && error.response.status === 403)
            ? yield put(showNotification({
                message: "You can't create a report for this task",
                time: 15000
            }))
            : yield put(showNotification({
                message: 'Server error'
            }))
    }

    yield put(hideLoading());
}