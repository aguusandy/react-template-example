import { types } from "../types/exampleType";

//example of reducer
const exampleReducer = (state={attribute:"nothing yet"}, action) => {
    
    let returnL = {
        attribute: state.attribute
    }
    
    switch(action.type){
        case types.EXAMPLE:{
            returnL.attribute = "example";
            break;
        }
        case types.EXAMPLE2:{
            returnL.attribute = "example2";
            break;
        }
        default:{
            returnL.attribute = "nothing yet";
            break;
        }
    }
    return returnL;
}

export default exampleReducer;