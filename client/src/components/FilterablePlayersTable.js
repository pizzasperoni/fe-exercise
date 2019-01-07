import React from 'react'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'

function FilterablePlayersTable() {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
export default connect(null, { })(FilterablePlayersTable) 