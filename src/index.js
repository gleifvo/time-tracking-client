//@flow
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers/index';
import injectTapEventPlugin from 'react-tap-event-plugin';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    app,
    applyMiddleware(sagaMiddleware, logger)
);

injectTapEventPlugin();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);