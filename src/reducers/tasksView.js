import * as constants from '../constants';

const defaultState = {
    tasks: []
}

const tasksView = (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_TASKS:
            return { ...state, ...action.payload }
        case constants.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.name !== action.payload.name)
            }
        default:
            return state;
    };
}

export default tasksView;