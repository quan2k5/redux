import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Profiles() {
    const stateProfiles:any=useSelector(state=>{
        return state;
    })
    
  return (
    <table>
        <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
        </tr>
        <tbody>
            {stateProfiles.reducerProfiles.map((e:any)=>{
                return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.gentle}</td>
                    <td>{e.birth}</td>
                    <td>{e.address}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
  )
}
