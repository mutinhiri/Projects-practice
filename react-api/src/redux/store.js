import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import logger from "redux-logger"
import { applyMiddleware } from "redux";
const store = createStore(rootReducer, applyMiddleware(logger,thunk))

export default store 