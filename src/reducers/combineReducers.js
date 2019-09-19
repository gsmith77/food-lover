import { combineReducers } from 'redux'
import businessReducer from './businessReducer'
import eventReducer from './eventReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    businesses: businessReducer,
    events: eventReducer,
    user: userReducer
})

export default rootReducer;