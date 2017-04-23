import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';

const app = combineReducers({
    user,
    loading
});

export default app;