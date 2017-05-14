import api from './client';
import { hideLoading, showLoading } from '../actions/loading';
import { showNotification } from '../actions/notification';
import { put, call } from 'redux-saga/effects';
import { UserSelector } from '../selectors';
import { select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { loadTasks, removeTask } from '../actions/tasks';
import { batchActions } from 'redux-batched-actions';
import { closeConfirmation } from '../actions/confirmation';

export function* fetchTasks(action) {
    yield put(showLoading());
    const token = yield select(UserSelector.getToken);

    try {
        let response = yield call(api.get, action.payload._links.tasks.href, {
            headers: { token }
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