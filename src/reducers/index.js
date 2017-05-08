import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';
import notification from './notification';
import projects from './projects';
import projectManagement from './projectManagement';
import navDrawer from './navDrawer';
import confirmation from './confirmation';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const app = combineReducers({
    user,
    loading,
    notification,
    confirmation,
    navDrawer,
    projects,
    projectManagement,
    routing: routerReducer,
    form: formReducer
});

export default app;