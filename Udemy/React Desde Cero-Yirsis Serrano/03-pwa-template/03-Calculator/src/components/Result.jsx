import React from 'react'
import PropTypes from 'prop-types'

const Result = ({operation,result}) => {
  return (
    <div>
      <br/>
      <span>{operation}:{result}</span>
    </div>
  )
}

Result.propTypes = {
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired
}

export default Result