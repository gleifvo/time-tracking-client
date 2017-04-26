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
import sagas from './sagas/index';
import { tokenEnrichmentMiddleware } from './middlewares/tokenEnrichmentMiddleware';
import {tokenStorageMiddleware} from './middlewares/tokenStorageMiddleware';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    app,
    applyMiddleware(tokenEnrichmentMiddleware, tokenStorageMiddleware, sagaMiddleware, logger)
);

sagaMiddleware.run(sagas);
injectTapEventPlugin();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);