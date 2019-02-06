import { FETCH_PLAYERS, SEARCH_PLAYER } from '../actions/types'

const initialState = {
  playerName: '',
  playerPositions: ['Goal Keeper', 'Defender', 'Midfielder', 'Forward'],
  playerPosition: 'Position',
  playerAge: '',
  players: []
}


const playersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS :
      console.log('FETCH_PLAYERS', action.payload)
      return {
        ...state,
        players: action.payload
      }
    case SEARCH_PLAYER:
      return {
        ...state,
        player: action.payload
      }
    default:
      return state
  }
}

export default playersReducer