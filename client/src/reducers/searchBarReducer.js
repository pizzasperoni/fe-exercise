import { FETCH_PLAYERS } from '../actions/types'

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
    default:
      return state
  }
}