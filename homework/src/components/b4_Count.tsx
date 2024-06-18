import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Count() {
    const stateCount:any=useSelector(state=>{
        return state;
    })
    const dispatch=useDispatch();
    const increase=()=>{
        dispatch({
            type:"INCREASE"
        })
    }
    const decrease=()=>{
        dispatch({
            type:"DECREASE"
        })
    }
  return (
    <div><h4>Count</h4>
        <p>{stateCount.reducerCount}</p>
        <button onClick={increase}>tăng</button>
        <button onClick={decrease}>giảm</button>
    </div>
  )
}
