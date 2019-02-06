import React, { Component }from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

class PlayersTable extends Component {
  getPlayers = () => {
    return this.props.players.map((player)=> {
      return (
        <tr>
          <th scope="row">{player.name}</th>
          <td>{player.position}</td>
          <td>{player.nationality}</td>
          <td>{player.dateOfBirth}</td>
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
              <th>Date of Birth</th>
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
  players: state.players.players,
})

export default connect(mapStateToProps)(PlayersTable) 