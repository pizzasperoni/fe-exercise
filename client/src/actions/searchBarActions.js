import { FETCH_PLAYERS, SEARCH_PLAYER } from './types'

export const fetchPlayers = () => dispatch => {
  fetch('https://football-players-b31f2.firebaseio.com/players.json')
  .then(res => res.json())
  .then(players => dispatch({
    type: FETCH_PLAYERS,
    payload: players
  }))
}

export const searchPlayer = (player) => (dispatch) => {
  dispatch({
    type: SEARCH_PLAYER,
    payload: player
  })
}
