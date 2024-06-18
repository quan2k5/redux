// khởi tạo state
const initalCount:number=0;
// khởi tạo hàm reducerCount
const reducerCount=(state=initalCount,action:any)=>{
    switch(action.type){
        case "INCREASE":
            return state+1;
        case "DECREASE":
            return state-1;
        default:
            return state;
    }
}
export default reducerCount;