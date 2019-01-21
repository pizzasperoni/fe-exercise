import React from 'react'
import PropTypes from 'prop-types'

import { Input } from 'reactstrap'

const Select = (props) => {
  return (
    <div>
      <Input type="select" name="select" id="exampleSelect">
        {props.options.map((option) => {
          return (<option key={option}>{option}</option>)
        })}
      </Input>
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}


export default Select