import { FETCH_PLAYERS } from '../actions/types'

const initialState = {
  players: [],
  playerFound: {}
}

const playersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS :
      console.log(action.payload)
      return {
        ...state,
        players: action.payload
      }
    default:
      return state
  }
}

export default playersReducer