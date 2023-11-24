import React, {useEffect, useState} from 'react';
import {decrement, increment} from "./counter.slice";
import {useDispatch, useSelector} from "react-redux";

//functional component: stateless
const Counter = () => {

  const dispatch = useDispatch()
  const {count} = useSelector(state=>state.count)
  return (
    <div>
      {count}<br/>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <h1>Counter Component</h1>
    </div>
  );
};

export default Counter;
