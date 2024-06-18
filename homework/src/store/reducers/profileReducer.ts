const initalProfile:any=
{
    id:1,
    name:'Lê Anh Quân',
    gentle:'Nam',
    birth:'21/02/2005',
    address:'Vinh-Nghệ An',
}
// khởi tạo hàm reducerCount
const reducerProfile=(state=initalProfile,action:any)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default reducerProfile;