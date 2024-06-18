let storedCheckString = localStorage.getItem('check');
let storedCheck:any=storedCheckString ? JSON.parse(storedCheckString) : null;
let initalLight:boolean;
if(storedCheck!=null){
    initalLight=storedCheck.check;
}else{
    initalLight=true;
}
const reducerLight=(state=initalLight,action:any)=>{
    switch(action.type){
        case "LIGHTNING":
            localStorage.setItem('check',JSON.stringify({check:action.payload===true}));
            return action.payload===true;
        default:
            return state;
    }
}
export default reducerLight;