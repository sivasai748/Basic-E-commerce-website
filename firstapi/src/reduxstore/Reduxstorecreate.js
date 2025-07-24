import {legacy_createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import reducerfunc from "../reducerfunction/Reducerfunction"
var mystore=legacy_createStore(reducerfunc,applyMiddleware(logger))
export default mystore