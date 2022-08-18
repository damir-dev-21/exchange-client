import {combineReducers} from 'redux'
import bankReducer from './reducers/bank'

export default combineReducers({
    banks: bankReducer
})