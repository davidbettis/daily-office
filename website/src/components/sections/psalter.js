import React from 'react'
import PropTypes from 'prop-types'
import ESVLink from '../esv-link'

// Psalter fetches the psalm(s) appointed for the day and renders them for
// reading. Each psalm includes a link to the ESV website.
//
// Props:
//      date: Javascript date object for the daily office day in question
//      lectionary: lectionary to use for the readings (see LECTIONARY options below)
//      psalms: array of psalms to display
//
// LECTIONARY: morning, evening

class Psalter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <p className="section">Psalms Appointed</p>
        {this.props.psalms.map(psalm => (
          <div key={psalm.psalm_section.replace(/:.*$/, '')}>
            <p>Psalm { psalm.psalm_section } <ESVLink scriptureText={'Psalm+' + psalm.psalm_section} linkText="(ESV)" /></p>
            <p>
              {psalm.psalm_verses.map(psalmVerse => (
                <span key={psalmVerse.verse}>
                  <span className="verse">{ psalmVerse.verse }</span>
                  {psalmVerse.text.map((line, index) => (
                    <span className="text" key={index}>{ line }<br/></span>
                  ))}
                </span>
              ))}
            </p>
          </div>
        ))}
        <p>
          <span className="officiant">☩ Glory be to the Father, and to the Son, and to the Holy Spirit; *</span><br/>
          <span className="people">As it was in the beginning, is now, and ever shall be, world without end. Amen.</span><br/>
        </p>
      </div>
    )
  }
}

Psalter.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  lectionary: PropTypes.string.isRequired,
  psalms: PropTypes.array.isRequired
}

export default Psalter
