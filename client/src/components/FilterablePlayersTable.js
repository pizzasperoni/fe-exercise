import React from 'react'
import { connect } from 'react-redux'
import SearchBarContainer from '../containers/SearchBarContainer'


function FilterablePlayersTable() {
  return (
    <div>
      <SearchBarContainer />
    </div>
  )
}
export default connect(null, { })(FilterablePlayersTable) 