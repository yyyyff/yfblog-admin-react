import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import auth from "./reducers/auth"
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth
  })

export default createRootReducer
