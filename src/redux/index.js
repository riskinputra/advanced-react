import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import newsReducers from './reducers/newsReducers'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  newsReducers
})

const middleware = applyMiddleware(thunk, logger)
const enchancer = composeEnchancers(middleware)
const store = createStore(reducers, enchancer)

export default store