import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore (rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))
