import { combineReducers } from 'redux'
import businessReducer from './businessReducer'
import eventReducer from './eventReducer'

const rootReducer = combineReducers({
    businesses: businessReducer,
    event: eventReducer
})

export default rootReducer;