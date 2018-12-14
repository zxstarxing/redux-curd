import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';
import App from './components/App'
import {
    BrowserRouter as Router,
} from 'react-router-dom';



const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise(), logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
