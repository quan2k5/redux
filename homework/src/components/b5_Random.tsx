import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Random() {
    const stateRandom:any=useSelector(state=>{
        return state;
    })
    const dispatch=useDispatch();
    const handleRandom=()=>{
        dispatch({type:'ADDRANDOM'})
    }
  return (
    <div>
        <h3>Random Number</h3>
        <p>{stateRandom.reducerRandom}</p>
        <button onClick={handleRandom}>Random</button>
    </div>
  )
}

