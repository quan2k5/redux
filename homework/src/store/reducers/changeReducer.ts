const initalState:string='Rikkei Academy';
// khởi tạo hàm reducerCount
const reducerState=(state=initalState,action:any)=>{
    switch(action.type){
        case "CHANGESTATE":
            if(action.payload==true){
                return 'Rikkei Soft';
            }else{
                return 'Rikkei Academy'
            }
        default:
            return state;
    }
}
export default reducerState;