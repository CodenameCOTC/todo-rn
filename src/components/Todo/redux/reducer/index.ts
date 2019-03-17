import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const todosRootReducer = combineReducers({
  items: todoReducer,
})

export default todosRootReducer
