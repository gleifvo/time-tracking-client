import { combineReducers } from 'redux';

const app = combineReducers({
    reducer: (state = {}, action)  => state
});

export default app;