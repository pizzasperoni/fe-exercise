import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPlayers, findPlayer } from '../../actions/searchBarActions'
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
      playerAge: ''
    }
  }

  componentWillMount(){
    this.props.fetchPlayers()
    console.log('props', this.props)
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('state', this.state)
  }

  handlePlayerNameChange = e => {
    this.setState({playerName : e.target.value})
    console.log('player name: ',this.state.playerName)
  }

  handlePlayerAgeChange = e => {
    this.setState({playerAge : e.target.value})
    console.log('player age: ',this.state.playerAge)
  }

  handlePositionSelect = e => {
    this.setState({playerPosition: e.target.value})
    console.log('Position selected', this.state.playerPosition)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log('player age', this.state)
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
          <Button color="primary">Search</Button>
        </Form>
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