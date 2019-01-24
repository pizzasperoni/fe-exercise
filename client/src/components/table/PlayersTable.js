import React from 'react'
import { Table } from 'reactstrap'

const PlayersTable = (props) =>  (
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
          <tr>
            <th scope="row">Pizza</th>
            <td>Defender</td>
            <td>Pizza Team</td>
            <td>28</td>
          </tr>
        </tbody>
    </Table>
)


export default PlayersTable