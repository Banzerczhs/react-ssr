import React from 'react';
import {hot} from "react-hot-loader";
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import RouterCom from "./router";

import style from './App.module.less';

function App(){
    return (
        <Router>
            <img src={require('./cnodejs_light.svg')} alt="logo" className={style.logo}/>
            <p><NavLink to="/user">go to user</NavLink></p>
            <p><NavLink to="/hjk">go to hjk</NavLink></p>
            <RouterCom/>
        </Router>
    );
}

export default hot(module)(App);
