import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPlayers } from '../actions/searchBarActions'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      position: '',
      age: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const player = {
      name: this.state.name,
      position: this.state.position,
      age: this.state.age
    }
    this.props.fetchPlayers(player)
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={this.onSubmit}>
          <div>
            <Input type="text" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
          </div>
          <div>
          <Input type="select" name="select">
            <option value="position">Position</option>
            <option value="goal_keeper">Goal Keeper</option>
            <option value="defender">Defender</option>
            <option value="midfielder">Midfielder</option>
            <option value="forward">Forward</option>
          </Input>
          </div>
          <div>
            <Input type="number" placeholder="Age" value={this.state.number} onChange={this.onChange}/>
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
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

export default connect(mapStateToProps, { fetchPlayers })(SearchBar) 