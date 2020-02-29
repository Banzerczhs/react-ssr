import React from "react";
import {connect} from "react-redux";
import PT from "prop-types";

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>{
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
                Clicked: {value} times
            </div>
        </div>
    );
}

Counter.propTypes={
    value : PT.number.isRequired,
    onIncrement: PT.func.isRequired,
    onDecrement: PT.func.isRequired,
    onIncrementAsync: PT.func.isRequired
}

export default connect()(Counter);