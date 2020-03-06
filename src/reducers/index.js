import {combineReducers} from "redux"

import User from "./user";
import Counter from "./counter";

let rootReducers=combineReducers({
    User,
    Counter
})

export default rootReducers; 