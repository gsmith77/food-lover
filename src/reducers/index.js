import { combineReducers } from 'redux'
import businessReducer from './businessReducer'

const rootReducer = combineReducers({
    businesses: businessReducer
})

export default rootReducer;