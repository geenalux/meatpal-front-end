import { combineReducers } from "redux";

import meals from "./meals";

const rootReducer = combineReducers({
  meals
})

export * from "./meals";

export default rootReducer;
