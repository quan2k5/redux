const initalProfiles:any=[
    {
        id:1,
        name:'Lê Anh Quân',
        gentle:'Nam',
        birth:'21/02/2005',
        address:'Vinh-Nghệ An',
    },
    {
        id:2,
        name:'Quỳnh Trang',
        gentle:'Nữ',
        birth:'15/11/2005',
        address:'Vinh-Nghệ An',
    }
]
// khởi tạo hàm reducerCount
const reducerProfiles=(state=initalProfiles,action:any)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default reducerProfiles;