import React,{Component} from "react";
import {connect} from "react-redux";

import style from "./card.less"

class Card extends Component{
    constructor(props){
        super(props);

        this.state={};
    }

    render(){
        let {name,age,phone}=this.props;
        return (
            <div className={style.card}>
                <p>姓名:{name}</p>
                <p>电话:{phone}</p>
                <p>年龄:{age}</p>
            </div>
        )
    }
}

export default connect(state=>({state}))(Card);