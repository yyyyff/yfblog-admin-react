import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from './rootReducers'

export const history = createBrowserHistory()

const apply = () => {
  return applyMiddleware(routerMiddleware(history), thunk)
}
const enhancers =
  process.env.NODE_ENV === 'development'
    ? compose(composeWithDevTools(apply()))
    : compose(apply())


export default function configureStore(preloadedState) {
  const store = createStore(createRootReducer(history), preloadedState, enhancers)
  return store
}
