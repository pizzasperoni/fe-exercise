import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { fetchPlayers } from '../../actions/searchBarActions'
import { Form, Button } from 'reactstrap'

import Select from '../../components/form/Select'
import SingleInput from '../../components/form/SingleInput'

class SearchBarContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerName: '',
      playerPositions: ['Goal Keeper', 'Defender', 'Midfielder', 'Forward'],
      playerPosition: 'Position',
      playerAge: '',
      players: []
    }
  }

  componentWillMount(){
    this.props.fetchPlayers()
  }



  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("submit!")
    
  }

  handlePlayerNameChange = e => {
    this.setState({playerName : e.target.value})
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
            content={this.state.playerName}
            placeholder={'Player name'}
          />
          <Select 
            name={'position'}
            placeholder={'Position'}
            controlFunc={this.handlePositionSelect}
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
          <Button color="primary" type="submit">Search</Button>
        </Form>
      </div>
    )
  }
}

SearchBarContainer.propTypes = {
  fetchPlayers: PropTypes.func.isRequired
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPlayers}, dispatch)
}

export default connect(null, matchDispatchToProps)(SearchBarContainer) 