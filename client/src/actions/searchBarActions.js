import { FETCH_PLAYERS, SEARCH_PLAYER } from './types'
import moment from 'moment'


export const fetchPlayers = () => dispatch => {
  fetch('https://football-players-b31f2.firebaseio.com/players.json')
  .then(res => res.json())
  .then(data => {
    let players = data.map((item)=>{
      let dob =  item.dateOfBirth.replace(/-/g,'')
      let age = moment(dob, "YYYYMMDD").fromNow()
      age = age.replace(/ years ago/g,'')
      item.age = age
      return item 
    })
    dispatch({
      type: FETCH_PLAYERS,
      payload: players
    })
  })
}

export const searchPlayer = (player) => (dispatch) => {
  dispatch({
    type: SEARCH_PLAYER,
    payload: player
  })
}
