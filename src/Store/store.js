import {combineReducers, createStore} from 'redux'
import counterReducer from './counter.reducer'
import todoReducer from './todolist.reducer'
import productReducer from './productReducer';
var store = createStore(combineReducers({counterReducer,todoReducer,productReducer}))
export default store;