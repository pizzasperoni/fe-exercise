import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPlayers, findPlayer } from '../actions/searchBarActions'

class SearchBarContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      position: '',
      age: ''
    }
  }

  componentWillMount(){
    this.props.fetchPlayers()
    console.log('props', this.props)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  onSubmit =(e) => {
    e.preventDefault()
    const player = {
      name: this.state.name,
      position: this.state.position,
      age: this.state.age
    }
    this.props.findPlayer(player)
    console.log(this.state)
    console.log('submit') 
  }


  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} onChange={this.onChange} player={this.state} />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  players: state.players,
  player: state.player
})

SearchBarContainer.propTypes = {
  fetchPlayers: PropTypes.func.isRequired,
  findPlayer: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { fetchPlayers, findPlayer })(SearchBarContainer) 