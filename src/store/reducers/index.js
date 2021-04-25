import { combineReducers } from 'redux'
import configurationReducer from '../reducers/configuration'
import productReducer from '../reducers/product'

const mainReducer = combineReducers({
	configuration: configurationReducer,
	product: productReducer
})

export default mainReducer
