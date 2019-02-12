import React, { Component }from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

class PlayersTable extends Component {

  getPlayers = () => {
    let allPlayers = this.props.players
    let playersFiltered = this.props.playersFiltered
    let selectedPosition = this.props.selectedPosition
    
    if (selectedPosition == "Position"){
      playersFiltered = allPlayers
    }
    return playersFiltered.map((player)=> {
      return (
        <tr key={player.name}>
          <th scope="row">{player.name}</th>
          <td>{player.position}</td>
          <td>{player.nationality}</td>
          <td>{player.age}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table hover className="table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Team</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
            {this.getPlayers()}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players.allPlayers,
  playersFiltered: state.players.playersFiltered,
  selectedPosition: state.players.selectedPosition
})

export default connect(mapStateToProps)(PlayersTable) 