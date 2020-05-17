import React from 'react'
import PropTypes from 'prop-types'

import ApostlesCreed from '../sections/apostles-creed'
import Closing from '../sections/closing'
import Confession from '../sections/confession'
import DailyCollect from '../sections/daily-collect'
import DateComponent from '../sections/date'
import FreePrayer from '../sections/free-prayer'
import GeneralThanksgiving from '../sections/general-thanksgiving'
import Intro from '../sections/intro'
import Invitatory from '../sections/invitatory'
import Lesson from '../sections/lesson'
import MissionPrayer from '../sections/mission-prayer'
import Prayer from '../sections/prayer'
import Psalter from '../sections/psalter'

import ScriptureService from '../../helpers/scripture-service'

const ONE_DAY_MS = 86400000

class EveningComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      brevity: 'short',
      psalms: [],
      lessons: [],
      date: props.date
    }
  }

  updateBrevity (brevity) {
    this.setState({ brevity: brevity })
  }

  rewindByOneDay () {
    const minusOneDay = this.state.date.getTime() - ONE_DAY_MS
    const date = new Date()
    date.setTime(minusOneDay)

    this.updateDate(date)
  }

  fastForwardByOneDay () {
    const plusOneDay = this.state.date.getTime() + ONE_DAY_MS
    const date = new Date()
    date.setTime(plusOneDay)

    this.updateDate(date)
  }

  componentDidMount () {
    this.updateDate(this.props.date)
  }

  componentDidUpdate (prevProps) {
    if (this.props.date !== prevProps.date) {
      this.updateDate(this.props.date)
    }
  }

  updateDate (date) {
    this.setState({ date: date })
    this.fetchScripture(date)
  }

  fetchScripture (date) {
    ScriptureService.getScriptureForOffice('evening', date).then(results => {
      return results.json()
    }).then(data => {
      this.setState({
        psalms: data.body['evening-psalms'],
        lessons: data.body.evening
      })
    })
  }

  render () {
    return (
      <div>
        <div style={{ float: 'right' }}>
          <span className={this.state.brevity === 'short' ? 'duration-selected' : 'duration'} onClick={() => this.updateBrevity('short')}>Short (~15 min)</span><br/>
          <span className={this.state.brevity === 'medium' ? 'duration-selected' : 'duration'} onClick={() => this.updateBrevity('medium')}>Medium (~30 min)</span><br/>
          <span className={this.state.brevity === 'long' ? 'duration-selected' : 'duration'} onClick={() => this.updateBrevity('long')}>Long (~45 min)</span>
        </div>

        <h2>
          <span className="date-rewind" onClick={() => this.rewindByOneDay()}>&#10218;</span>
          <DateComponent date={this.state.date} />
          <span className="date-fast-forward" onClick={() => this.fastForwardByOneDay()}>&#10219;</span>
        </h2>

        <h1>Evening Prayer</h1>

        <div className="prayer">
          <Intro texts='evening' />
          <Confession intro="long" after="long" />
          <Invitatory texts="evening" />
          <Psalter lectionary='evening' date={this.state.date} psalms={this.state.psalms} />
          <Lesson lectionary='evening'
            postFirstReading={this.state.brevity === 'short' ? 'none' : 'magnificat'}
            postSecondReading={this.state.brevity === 'short' ? 'none' : 'nunc-dimittis'}
            date={this.state.date} lessons={this.state.lessons} />
          { this.state.brevity === 'long' ? <ApostlesCreed /> : null }
          { this.state.brevity === 'medium' || this.state.brevity === 'long' ? <Prayer /> : null }
          <DailyCollect collects='evening' />
          { this.state.brevity === 'long' ? <MissionPrayer /> : null }
          <FreePrayer />
          { this.state.brevity === 'long' ? <GeneralThanksgiving /> : null }
          <Closing />
        </div>

      </div>
    )
  }
}

EveningComponent.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
}

export default EveningComponent
