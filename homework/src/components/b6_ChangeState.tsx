import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function ChangeState() {
    let check=useRef<boolean>(true);
    const stateState:any=useSelector(state=>{
        return state;
    })
    const dispatch=useDispatch();
    const handleState=()=>{
        if(check.current){
            check.current=false;
        }else{
            check.current=true;
        }
        dispatch({type:'CHANGESTATE',payload:check.current})
    }
  return (
    <div>
        <h3>State</h3>
        <p>{stateState.reducerState}</p>
        <button onClick={handleState}>Change state</button>
    </div>
  )
}

