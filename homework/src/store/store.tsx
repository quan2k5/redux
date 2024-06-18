import { combineReducers, createStore} from "redux";
import reducerProfile from "./reducers/profileReducer";
import reducerProfiles from "./reducers/profilesReducer";
import reducerProducts from "./reducers/productsReducer";
import reducerCount from "./reducers/countReducer";
import reducerRandom from "./reducers/randomReducer";
import reducerState from "./reducers/changeReducer";
import reducerLight from "./reducers/lightReducer";
import reducerRegister from "./reducers/registerReducer"
const rootReducer=combineReducers(
    {
        reducerProfile,
        reducerProfiles,
        reducerProducts,
        reducerCount,
        reducerRandom,
        reducerState,
        reducerLight,
        reducerRegister
    }
)
const store=createStore(rootReducer);
export default store;
