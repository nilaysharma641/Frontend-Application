import { createStore, applyMiddleware } from 'redux'
import mainReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(mainReducer, composedEnhancer)

export default store
