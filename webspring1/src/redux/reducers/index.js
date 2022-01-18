//more than one state in the globalState
//you should import all reducers
import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";

export default combineReducers(
    {
        example_reducer: exampleReducer
    }
);