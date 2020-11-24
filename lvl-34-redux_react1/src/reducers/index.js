import counterReducer from './counter'
import isLoggedReducer from './isLogged'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    logged: isLoggedReducer
})

export default allReducers