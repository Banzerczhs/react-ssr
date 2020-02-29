import React from 'react';
import ReactDOM from 'react-dom';
import reducers from "./reducers";
import Sagas from "./sagas";
import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {Provider} from "react-redux";
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware=createSagaMiddleware();
const store=createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(Sagas);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
