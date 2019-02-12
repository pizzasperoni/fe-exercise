import { 
  FETCH_PLAYERS, 
  SEARCH_PLAYER,
  SELECT_POSITION
} from '../actions/types'

const initialState = {
  playerName: '',
  playerPositions: ['Position', 'Attacking Midfield', 'Central Midfield', 'Centre-Back', 'Centre-Forward', 'Defensive Midfield', 'Keeper', 'Left Midfield', 'Left Wing', 'Left-Back', 'Right-Back'],
  playerPosition: 'Position',
  playerAge: '',
  players: []
}


const playersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS :
      //console.log('FETCH_PLAYERS', action.payload)
      return {
        ...state,
        players: action.payload
      }
    case SEARCH_PLAYER:
      return {
        ...state,
        player: action.payload
      }
    case SELECT_POSITION:
      return {
        ...state,
        players: action.payload
      }
    default:
      return state
  }
}

export default playersReducer