import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { fetchPlayers, searchPlayer, selectPosition } from '../../actions/searchBarActions'
import { Form, Button } from 'reactstrap'

import Select from '../../components/form/Select'
import SingleInput from '../../components/form/SingleInput'
import AgeInput from '../../components/form/AgeInput';
import store from '../../store'

class SearchBarContainer extends Component {
  
  componentWillMount(){
    this.props.fetchPlayers()
  }
  componentWillReceiveProps(){
    console.log('state', store.getState())
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    //console.log('submit props',this.props)   
  }

  handlePlayerNameChange = e => {
    //console.log('handler name',e.target.value)
  }

  handlePlayerAgeChange = e => {
    if(e.target.value > 40){
      e.target.value = 40
    }
  }

  handlePositionSelect = e => {
    if (e.target.value !== "Position"){
      this.props.selectPosition(e.target.value, this.props.players)
    } else {
      this.props.fetchPlayers()
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={this.handleFormSubmit}>
          <SingleInput 
            title={'Player name'}
            controlFunc={this.handlePlayerNameChange}
            content={this.props.playerName}
            placeholder={'Player name'}
          />
          <Select 
            name={'position'}
            placeholder={'Position'}
            controlFunc={this.handlePositionSelect}
            options={this.props.playerPositions}
            selectedOption={this.props.playerPosition}
          />
          <AgeInput 
            title={'Age'}
            controlFunc={this.handlePlayerAgeChange}
            content={this.props.playerAge}
            placeholder={'Age'}
          />
          <Button color="primary" type="submit">Search</Button>
        </Form>
      </div>
    )
  }
}

SearchBarContainer.propTypes = {
  fetchPlayers: PropTypes.func.isRequired,
  searchPlayer: PropTypes.func.isRequired,
  selectPosition: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPlayers, searchPlayer, selectPosition}, dispatch)
}

const mapStateToProps = state => ({
  players: state.players.players,
  searchPosition: state.players.playerPosition
})

export default connect(mapStateToProps, matchDispatchToProps)(SearchBarContainer) 