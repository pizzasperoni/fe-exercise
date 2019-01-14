import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPlayers, findPlayer } from '../../actions/searchBarActions'

import Select from '../../components/form/Select'
import SingleInput from '../../components/form/SingleInput'

class SearchBarContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerName: '',
      playerPositions: [],
      playerPosition: '',
      playerAge: ''
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
        <h1> esta es la tabla</h1>
        <SingleInput 
          inputType={'text'}
          title={'Player name'}
          controlFunc={this.handlePlayerNameChange}
          content={this.state.playerName}
          placeholder={'Player name'}
        />
        <Select 
          name={'position'}
          placeholder={'Position'}
          controllerFunc={this.handlePositionSelect}
          options={this.state.playerPositions}
          selectedOption={this.state.playerPosition}
        />
        <SingleInput 
          inputType={'number'}
          title={'Age'}
          controlFunc={this.handlePlayerAgeChange}
          content={this.state.playerAge}
          placeholder={'Age'}
        />
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