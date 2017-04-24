import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';
import notification from './notification';

const app = combineReducers({
    user,
    loading,
    notification
});

export default app;