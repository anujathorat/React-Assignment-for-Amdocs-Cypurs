import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore } from 'redux';
import allReducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
                allReducers,
                applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('app')
);