import { combineReducers } from 'redux'
import businessReducer from './businessReducer'

const rootReducer = combineReducers({
    properties: businessReducer
})

export default rootReducer;