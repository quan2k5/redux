const initalProducts:any=[
    {
        id:1,
        name:'Cam sành',
        price:'20.000đ',
        quantity:10
    },
    {
        id:2,
        name:'Bưởi ba roi',
        price:'50.000đ',
        quantity:15
    }
]
// khởi tạo hàm reducerCount
const reducerProducts=(state=initalProducts,action:any)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default reducerProducts;