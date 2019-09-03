import { combineReducers } from 'redux'
import businessReducer from './businessReducer'
import eventReducer from './eventReducer'

const rootReducer = combineReducers({
    businesses: businessReducer,
    events: eventReducer
})

export default rootReducer;