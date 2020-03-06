import React,{Component} from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../container/home.jsx";
import User from "../components/user.jsx";
import NotFound from "../container/NotFound.jsx";

class RouterConfig extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return (
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/user" component={User}></Route>
                <Route code={404} component={NotFound}></Route>
            </Switch>
        )
    }
}

export default RouterConfig;