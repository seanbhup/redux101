// This is our master reducers file. It doesnt manage any particular piece of state
// It manages/contains all other reducers (which contain a piece of state)

// get the combineReducers method from redux
import {combineReducers} from "redux";


import StudentReducer from "./StudentReducer";
import StudentReducer2 from "./StudentReducer2";


const rootReducer = combineReducers({
    // Inside here, we pass each reducer as a key/property
    // Each key/property will be available as state.key/property
    students: StudentReducer,
    students2: StudentReducer2
});

export default rootReducer;
