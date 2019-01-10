import { FETCH_PLAYERS, FIND_PLAYER } from '../actions/types'

const initialState = {
  players: [],
  player: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_PLAYERS:
      return {
        ...state,
        players: action.payload
      }
    case FIND_PLAYER:
      return {
        ...state,
        player: action.payload
      }
    default:
      return state
  }
}