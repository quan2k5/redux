const initalArray:any=[];
const reducerRandom=(state=initalArray,action:any)=>{
    switch(action.type){
        case "ADDRANDOM":
            let randomNumber:number=Math.ceil(Math.random()*100000);
            return [...state,randomNumber];
        default:
            return state;
    }
}
export default reducerRandom;