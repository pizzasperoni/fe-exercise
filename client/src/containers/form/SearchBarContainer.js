import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { fetchPlayers, searchPlayer } from '../../actions/searchBarActions'
import { Form, Button } from 'reactstrap'

//import Select from '../../components/form/Select'
//import SingleInput from '../../components/form/SingleInput'

class SearchBarContainer extends Component {
 
  componentWillMount(){
    this.props.fetchPlayers()
  }

  componentDidMount() {
    // console.log('players', this.props.players)
  }

  componentWillReceiveProps(props) {
    console.log('re render', this.props.players)
  }


  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("submit!")
    this.props.fetchPlayers()    
  }

  handlePlayerNameChange = e => {
    this.setprops({playerName : e.target.value})
  }

  handlePlayerAgeChange = e => {
    this.setprops({playerAge : e.target.value})
  }

  handlePositionSelect = e => {
    this.setprops({playerPosition: e.target.value})
  }

  onChange = (e) => {
    this.setprops({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={this.handleFormSubmit}>
          {/* <SingleInput 
            inputType={'text'}
            title={'Player name'}
            controlFunc={this.handlePlayerNameChange}
            content={this.props.playerName}
            placeholder={'Player name'}
          /> */}
          {/* <Select 
            name={'position'}
            placeholder={'Position'}
            controlFunc={this.handlePositionSelect}
            options={this.props.playerPositions}
            selectedOption={this.props.playerPosition}
          /> */}
          {/* <SingleInput 
            inputType={'number'}
            title={'Age'}
            controlFunc={this.handlePlayerAgeChange}
            content={this.props.playerAge}
            placeholder={'Age'}
          /> */}
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