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
import { tokenStorageMiddleware } from './middlewares/tokenStorageMiddleware';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routerMiddleware } from 'react-router-redux';
import UserInfo from './containers/UserInfo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory';
import { enableBatching } from 'redux-batched-actions';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const store = createStore(
    enableBatching(app),
    applyMiddleware(logger, tokenEnrichmentMiddleware, tokenStorageMiddleware,
        sagaMiddleware, routeMiddleware)
);

sagaMiddleware.run(sagas);
injectTapEventPlugin();

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Route path="/user-info" component={UserInfo} />
                </App>
            </Router>
        </Provider >
    </MuiThemeProvider>,
    document.getElementById('root')
);