import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';
import metadata from './metadata';
import notification from './notification';
import projects from './projects';
import projectManagement from './projectManagement';
import navDrawer from './navDrawer';
import projectReport from './projectReport';
import tasksView from './tasksView';
import confirmation from './confirmation';
import taskManagement from './taskManagement'
import userReport from './userReport'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const app = combineReducers({
    user,
    loading,
    notification,
    confirmation,
    navDrawer,
    projects,
    tasksView,
    metadata,
    projectManagement,
    taskManagement,
    projectReport,
    userReport,
    routing: routerReducer,
    form: formReducer
});

export default app;