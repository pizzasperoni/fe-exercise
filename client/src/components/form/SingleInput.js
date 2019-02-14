import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

class SingleInput extends Component {

  onKeyPress = e => {
    if (!((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122 || e.charCode === 32))){
      e.preventDefault()
    }
  }

  render() {
    return (
      <div>
        <Input 
          name={this.props.playerName}
          type="text"
          value={this.props.content}
          onChange={this.props.controlFunc}
          onKeyPress={this.onKeyPress}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
  
}

SingleInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  //.isRequired,
  placeholder: PropTypes.string,
}

export default SingleInput
