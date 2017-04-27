import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';
import notification from './notification';
import { routerReducer } from 'react-router-redux'

const app = combineReducers({
    user,
    loading,
    notification,
    routing: routerReducer
});

export default app;