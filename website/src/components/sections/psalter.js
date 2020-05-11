import React from 'react'
import ESVLink from '../esv-link'
import ScriptureService from '../../helpers/scripture-service'

import MorningPsalmLectionary from '../../data/psalms-morning-lectionary.json'
import EveningPsalmLectionary from '../../data/psalms-evening-lectionary.json'

// Psalter fetches the psalm(s) appointed for the day and renders them for
// reading. Each psalm includes a link to the ESV website.
//
// Props:
//      date: Javascript date object for the daily office day in question
//      lectionary: lectionary to use for the readings (see LECTIONARY options below)
//
// LECTIONARY: morning, evening

class Psalter extends React.Component {
  constructor (props) {
    super(props)
    if (!(props.date instanceof Date)) {
      throw new Error('Lesson error: date must be a Date object')
    }

    this.state = {
      date: props.date,
      lectionary: props.lectionary,
      psalms: []
    }
  }

  // Get the readings in lectionaryMap at the provided date.
  getReadingReferences (lectionaryMap, date) {
    var month = date.getMonth() + 1 // month, 1-12
    var day = date.getDate() // day, 1-31

    return lectionaryMap[month][day]
  }

  getLectionaryMap () {
    var lectionaryMap
    if (this.state.lectionary === 'morning') {
      lectionaryMap = MorningPsalmLectionary
    } else if (this.state.lectionary === 'evening') {
      lectionaryMap = EveningPsalmLectionary
    } else {
      throw new Error("Psalter error: lectionary must be one of ['morning','evening']")
    }
    return lectionaryMap
  }

  render () {
    var lectionaryMap = this.getLectionaryMap()
    var psalms = this.getReadingReferences(lectionaryMap, this.props.date)

    return (
      <div>
        <p className="section">Psalms Appointed</p>
        {this.props.psalms.map(psalm => (
          <div key={psalm.psalm_section.replace(/:.*$/, '')}>
            <p>Psalm { psalm.psalm_section } <ESVLink scriptureText={'Psalm+' + psalm.psalm_section} linkText="(ESV)" /></p>
            <p>
              {psalm.psalm_verses.map(psalm_verse => (
                <span key={psalm_verse.verse}>
                  <span className="verse">{ psalm_verse.verse }</span>
                  {psalm_verse.text.map(line => (
                    <span className="text">{ line }<br/></span>
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

export default Psalter
