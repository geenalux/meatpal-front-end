import { combineReducers } from "redux";

import meals from "./meals";
import meal from "./singleMeal";
import Meals from "../components/Meals";

const rootReducer = combineReducers({
  meals,
  meal
})

export * from "./meals";
export * from "./singleMeal";

export default rootReducer;
