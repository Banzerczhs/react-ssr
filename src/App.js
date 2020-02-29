import React from 'react';
import {connect} from "react-redux";

import Counter from "./Counter";
import Card from "./components/card";

function App(props){
  return (
    <div className="App">
      <Counter value={props.state} {...props}></Counter>
      <Card></Card>
    </div>
  );
}


function mapDispatchToProps(dispatch){
  return {
    onIncrement(){
      dispatch({type : 'INCREMENT'});
    },
    onDecrement(){
      dispatch({type : 'DECREMENT'});
    },
    onIncrementAsync(){
      dispatch({type : 'INCREMENT_ASYNC'});
    }
  }
}

export default connect(state=>({state:state.Counter}),mapDispatchToProps)(App);
