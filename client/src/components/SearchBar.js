import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPlayers } from '../actions/searchBarActions'


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
        <h1>Football player finder</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input type="text" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
          </div>
          <div>
          <select>
            <option value="position">Position</option>
            <option value="goal_keeper">Goal Keeper</option>
            <option value="defender">Defender</option>
            <option value="midfielder">Midfielder</option>
            <option value="forward">Forward</option>
          </select>
          </div>
          <div>
            <input type="number" placeholder="Age" value={this.state.number} onChange={this.onChange}/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  fetchPlayers: PropTypes.func.isrequired
}

export default connect(null, { fetchPlayers })(SearchBar) 