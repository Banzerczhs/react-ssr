import React,{Component} from "react";
import PT from "prop-types";
import {connect} from "react-redux";
import {hot} from "react-hot-loader";

class Counter extends Component{
    static propTypes={
        Counter : PT.number.isRequired,
        onIncrement: PT.func.isRequired,
        onDecrement: PT.func.isRequired,
        onIncrementAsync: PT.func.isRequired
    }

    constructor(props){
        super(props);

        this.state={};
    }

    render(){
        let { onIncrement, onDecrement, onIncrementAsync ,Counter}=this.props;

        return (
            <div>
                <button onClick={onIncrementAsync}>
                    Increment after 1 second
                </button>
                {' '}
                <button onClick={onIncrement}>
                    Increment
                </button>
                {' '}
                <button onClick={onDecrement}>
                    Decrement
                </button>
                <hr />
                <div>
                    Clicked: {Counter} times
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onIncrement(){
            dispatch({ type: 'INCREMENT' });
        },
        onDecrement(){
            dispatch({ type: 'DECREMENT' });
        },
        onIncrementAsync(){
            dispatch({ type: 'INCREMENT_ASYNC' });
        }
    };
}

export default hot(module)(connect(state=>({...state}),mapDispatchToProps)(Counter));