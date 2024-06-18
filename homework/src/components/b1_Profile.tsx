import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Count() {
    const stateProfile:any=useSelector(state=>{
        return state;
    })
  return (
    <div>
        <h3>Thông tin cá nhân</h3>
        <div>
            <span>ID:</span>
            <span>{stateProfile.reducerProfile.id}</span>
        </div>
        <div>
            <span>Name:</span>
            <span>{stateProfile.reducerProfile.name}</span>
        </div>
        <div>
            <span>Gender:</span>
            <span>{stateProfile.reducerProfile.gentle}</span>
        </div>
        <div>
            <span>Birth:</span>
            <span>{stateProfile.reducerProfile.birth}</span>
        </div>
        <div>
            <span>Address:</span>
            <span>{stateProfile.reducerProfile.address}</span>
        </div>
    </div>
  )
}
