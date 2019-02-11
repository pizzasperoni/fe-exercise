import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { fetchPlayers, searchPlayer } from '../../actions/searchBarActions'
import { Form, Button } from 'reactstrap'

import Select from '../../components/form/Select'
import SingleInput from '../../components/form/SingleInput'

class SearchBarContainer extends Component {
 
  componentWillMount(){
    this.props.fetchPlayers()
  }

  componentWillReceiveProps() {
    console.log('re render', this.props.players)
  }


  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("submit!")
    this.props.fetchPlayers()    
  }

  handlePlayerNameChange = e => {
    console.log('handler name',e.target.value)
  }

  handlePlayerAgeChange = e => {
    this.setState({playerAge : e.target.value})
  }

  handlePositionSelect = e => {
    this.setState({playerPosition: e.target.value})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={this.handleFormSubmit}>
          <SingleInput 
            inputType={'text'}
            title={'Player name'}
            controlFunc={this.handlePlayerNameChange}
            content={this.props.playerName}
            placeholder={'Player name'}
          />
          <Select 
            name={'position'}
            placeholder={'Position'}
            controlFunc={this.handlePositionSelect}
            onKeyPress={e => (e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122)}
            options={this.props.playerPositions}
            selectedOption={this.props.playerPosition}
          />
          <SingleInput 
            inputType={'number'}
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
  players: PropTypes.array.isRequired
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPlayers, searchPlayer}, dispatch)
}

const mapStateToProps = state => ({
  players: state.players.players,
})

export default connect(mapStateToProps, matchDispatchToProps)(SearchBarContainer) 