import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Light() {
    const stateLight:any=useSelector(state=>{
        return state;
    })
    const dispatch=useDispatch();
    const handleLight=(e:any)=>{
        let check=e.target.checked;
        console.log(check);
        dispatch({type:'LIGHTNING',payload:!check})
    }
    const changeLight=()=>{
        return stateLight.reducerLight?'white':'black'
    }
  return (
    <div>
        <h3>LightNing</h3>
        <div style={ { height:'200px',width:'150px',backgroundColor:changeLight()}}>
            <input type="checkbox" checked={!stateLight.reducerLight} onChange={(e)=>{handleLight(e)}} />
        </div>
    </div>
  )
}

