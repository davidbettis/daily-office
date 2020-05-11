import React from 'react'
import PropTypes from 'prop-types'
import * as dayOfYear from 'day-of-year'

// Intro prints out a verse of scripture to open the office
//
// TODO:
// 1. Include the season-specific introduction openers

function Intro (props) {
    let texts
    if (props.texts === 'morning') {
        texts = [
          {
            text: 'Grace to you and peace from God our Father and the Lord Jesus Christ.',
            scripture: 'Philippians 1:2'
          },
          {
            text: 'I was glad when they said to me, “Let us go to the house of the LORD!”',
            scripture: 'Psalm 122:1'
          },
          {
            text: 'Let the words of my mouth and the meditation of my heart be acceptable in your sight, O LORD, my rock and my redeemer.',
            scripture: 'Psalm 19:14'
          }
        ]
    } else if (props.texts === 'evening') {
      texts = [
        {
          text: 'Jesus spoke to them, saying, “I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.”',
          scripture: 'John 8:12'
        },
        {
          text: 'O Lord, I love the habitation of your house and the place where your glory dwells.',
          scripture: 'Psalm 26:8'
        },
        {
          text: 'Let my prayer be set forth in your sight as incense, the lifting up of my hands as the evening sacrifice.',
          scripture: 'Psalm 141:2'
        }
      ]
    } else {
      throw new Error("Intro error: unknown texts reference; please specify one of ['morning','evening']")
    }

    const doy = dayOfYear()
    const selected = texts[doy % texts.length]

    return (
      <div>
        <p>{ selected.text }<br/>
        <i>{ selected.scripture }</i></p>
      </div>
    )
}

Intro.propTypes = {
  texts: PropTypes.string.isRequired
}

export default Intro
