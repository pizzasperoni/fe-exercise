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
      playerAge: '',
      players: []
    }
  }

  componentWillMount(){
    fetch('https://football-players-b31f2.firebaseio.com/players.json')
    .then(res => res.json())
    .then(data =>{ 
      this.setState({players: data})
    })
  }


  handleFormSubmit = (e) => {
    e.preventDefault()
    const player = {
      name: this.state.playerName,
      position: this.state.playerPosition,
      age: this.state.playerAge
    }
    let playerFound = this.state.players.filter((item)=> (player.name == item.name || player.position == item.position))
    console.log('playerFound', playerFound)
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
          <Button color="primary" type="submit" >Search</Button>
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