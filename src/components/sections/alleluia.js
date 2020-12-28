import React from 'react'
import PropTypes from 'prop-types'

import Seasons from '../../helpers/seasons'

// Alleluia prints out alleluias according to Easter or Lent
function Alleluia (props) {
  const currentDate = new Date()
  const currentTime = currentDate.getTime() // epoch ms

  const inEaster = Seasons.inEastertide(currentTime)
  const inLent = Seasons.inLent(currentTime)
  const forEaster = props.forEaster
  const notLent = props.notLent

  if (forEaster) {
    if (inEaster) {
      return (<div><span className="people">Alleluia, alleluia, alleluia.</span></div>)
    } else {
      return (<div/>)
    }
  } else if (notLent) {
    if (inLent) {
      return (<div/>)
    } else {
      return (<div><span className="people">Alleluia.</span></div>)
    }
  } else {
    return (<div/>)
  }
}

Alleluia.propTypes = {
  forEaster: PropTypes.bool,
  notLent: PropTypes.bool // TODO rationalize this, it's weird...
}

export default Alleluia
