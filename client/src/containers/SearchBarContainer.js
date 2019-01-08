import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPlayers } from '../actions/searchBarActions'

class SearchBarContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      position: '',
      age: ''
    }
  }

  render() {
    return (
      <div>
        <SearchBar props={this.state}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  players: state.players
})

SearchBar.propTypes = {
  fetchPlayers: PropTypes.func.isrequired
}

export default connect(mapStateToProps, { fetchPlayers })(SearchBarContainer) 