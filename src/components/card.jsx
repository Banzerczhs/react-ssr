import React,{Component} from "react";
import {hot} from "react-hot-loader";
import {connect} from "react-redux";


import style from "./card.module.less";

class Card extends Component{
    constructor(props){
        super(props);

        this.state={};
    }
    
    render(){
        let {User:{name,age,phone}}=this.props.state;
        return (
            <div className={style.card}>
                <p>姓名:{name}</p>
                <p>电话:{phone}</p>
                <p>年龄:{age}</p>
            </div>
        )
    }
}

export default hot(module)(connect(state=>({state}))(Card));