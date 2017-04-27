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
import RaisedButtonExampleIcon from './components/UserInfo.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createBrowserHistory } from 'history';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware(browserHistory)

const store = createStore(
    app,
    applyMiddleware(logger, tokenEnrichmentMiddleware, tokenStorageMiddleware,
        sagaMiddleware, middleware)
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

sagaMiddleware.run(sagas);
injectTapEventPlugin();

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Route path="/user-info" component={RaisedButtonExampleIcon} />
                </App>
            </Router>
        </Provider >
    </MuiThemeProvider>,
    document.getElementById('root')
);