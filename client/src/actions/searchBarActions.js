import { FETCH_PLAYERS } from './types'

export const fetchPlayers = () => dispatch => {
  fetch('https://football-players-b31f2.firebaseio.com/players.json')
  .then(res => res.json())
  .then(data => console.log(data))
  // .then(players => dispatch({
  //   type: FETCH_PLAYERS,
  //   payload: players
  // }))
}