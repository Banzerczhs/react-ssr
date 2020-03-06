import React,{Component, Fragment} from "react";

import Countercom from '../components/counter.jsx';
import Card from "../components/card.jsx";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return (
            <Fragment>
                <Countercom></Countercom>
                <Card></Card>
            </Fragment>
        )
    }
}

export default Home;