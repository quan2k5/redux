import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Products() {
    const stateProfiles:any=useSelector(state=>{
        return state;
    })
    
  return (
    <table>
        <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chức năng</th>
        </tr>
        <tbody>
            {stateProfiles.reducerProducts.map((e:any)=>{
                return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    <td>{e.quantity}</td>
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
