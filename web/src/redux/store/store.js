
//import {exampleReducer} from "../reducers/exampleReducer"
import { createStore } from "redux";
import combineReducers from "../reducers/index";

const globalState = createStore(
    combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default globalState;