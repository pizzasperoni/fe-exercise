import { FETCH_PLAYERS, FIND_PLAYER } from './types'

export const fetchPlayers = () => dispatch => {
  fetch('https://football-players-b31f2.firebaseio.com/players.json')
  .then(res => res.json())
  .then(players => dispatch({
    type: FETCH_PLAYERS,
    payload: players
  }))
}


export const findPlayer = (player) => dispatch => {
  dispatch({
    type: FIND_PLAYER,
    payload: player
  })
}