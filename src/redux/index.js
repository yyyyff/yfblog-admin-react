import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancers = process.env.NODE_ENV === 'development' ? compose(composeWithDevTools(applyMiddleware(thunk))) : compose(applyMiddleware(thunk))

import combineReducer from './combineReducer'

const storeEnv = (initialState = {}) => {
  const store = createStore(combineReducer, initialState, enhancers)
  return store
}

export default storeEnv()
