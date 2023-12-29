import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {increment, decrement} from './TodoSlice'

export const Todo = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.todos.value)
    const newData = useSelector((state) => state.todos.data)
    console.log("count" , count)
    console.log("Data" , newData)

  return (
    <div>
        <h3>Todo</h3>
        <h4>{count}</h4>
        <button onClick={() =>dispatch(increment())}>+</button>
        <button onClick={() =>dispatch(decrement())}>-</button>
    </div>
  )
}
