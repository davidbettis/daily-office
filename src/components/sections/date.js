import React from 'react'
import PropTypes from 'prop-types'

function DateComponent (props) {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const date = props.date.toLocaleString('en-US', dateOptions)

  return (<span>{ date }</span>)
}

DateComponent.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
}

export default DateComponent
