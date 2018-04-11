import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-dovtools-extension";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);
