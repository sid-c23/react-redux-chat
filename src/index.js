import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import chatReducer from './reducers/ChatReducer';
import userReducer from './reducers/UserReducer';


const store = createStore(combineReducers({chat: chatReducer, user: userReducer}), applyMiddleware(logger, thunk))

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
