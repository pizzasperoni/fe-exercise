import { combineReducers } from 'redux'
import searchBarReducer from './searchBarReducer'

export default combineReducers({
  players: searchBarReducer
})