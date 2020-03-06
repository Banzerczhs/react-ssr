import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store";
import {Provider} from "react-redux";
import App from './App';
import * as serviceWorker from './serviceWorker';

let preloadState=window.__PRELOADED_STATE__;
const store=configureStore(preloadState);
const rootElement = document.getElementById('root');

ReactDOM.hydrate(
    <Provider store={store}>
        <App/>
    </Provider>, 
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
