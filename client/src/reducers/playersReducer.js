import { 
  FETCH_PLAYERS, 
  SEARCH_PLAYER,
  SELECT_POSITION
} from '../actions/types'

const initialState = {
  playerName: '',
  playerPositions: ['Position', 'Attacking Midfield', 'Central Midfield', 'Centre-Back', 'Centre-Forward', 'Defensive Midfield', 'Keeper', 'Left Midfield', 'Left Wing', 'Left-Back', 'Right-Back'],
  selectedPosition: 'Position',
  playerAge: '',
  allPlayers: [],
  playersFiltered: []
}


const playersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS :
      return {
        ...state,
        allPlayers: action.payload
      }
    case SEARCH_PLAYER:
      return {
        ...state,
        playersFiltered: action.payload
      }
    case SELECT_POSITION:
      return {
        ...state,
        playersFiltered: action.payload.playersFiltered,
        selectedPosition: action.payload.selectedPosition
      }
    default:
      return state
  }
}

export default playersReducer