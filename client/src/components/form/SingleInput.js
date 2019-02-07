import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

const SingleInput = (props) => {
  return (
    <div>
      <Input 
        name={props.playerName}
        type={props.inputType}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder}
      />
    </div>
  )
}

SingleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
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
