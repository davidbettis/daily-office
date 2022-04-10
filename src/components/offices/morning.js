import React from 'react'
import { withRouter } from 'next/router';
import PropTypes from 'prop-types'

import ApostlesCreed from '../sections/apostles-creed'
import Brevity from '../../helpers/brevity'
import Closing from '../sections/closing'
import Confession from '../sections/confession'
import DateComponent from '../sections/date'
import DailyCollect from '../sections/daily-collect'
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

class MorningComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      brevity: undefined,
      psalms: [],
      references: [],
      lessons: [],
      date: props.date
    }
  }

  updateBrevity (brevity) {
    if (!Brevity.VALID_BREVITY.includes(brevity)) {
        throw new Error('Invalid brevity: ' + brevity)
    }
    this.setState({ brevity: brevity })
    this.props.router.replace('?brevity=' + brevity)
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
    ScriptureService.getScriptureForOffice('morning', date).then(results => {
      return results.json()
    }).then(data => {
      this.setState({
        psalms: data['morning-psalms'],
        references: data['morning-references'],
        lessons: data.morning
      })
    })
  }

  render () {
    if (!this.props.router.query) {
        return <></>
    }

    let brevity = this.state.brevity
    if (brevity === undefined) {
        brevity = this.props.router.query.brevity
    }
    if (brevity === undefined) {
        brevity = Brevity.DEFAULT_BREVITY
    }

    return (
      <div>
        <div style={{ float: 'right' }}>
          <span className={brevity === 'short' ? 'duration-selected' : 'duration'} onClick={() => this.updateBrevity('short')}>Short (~15 min)</span><br/>
          <span className={brevity === 'medium' ? 'duration-selected' : 'duration'} onClick={() => this.updateBrevity('medium')}>Medium (~30 min)</span><br/>
          <span className={brevity === 'long' ? 'duration-selected' : 'duration'} onClick={() => this.updateBrevity('long')}>Long (~45 min)</span>
        </div>

        <h2>
          <span className="date-rewind" onClick={() => this.rewindByOneDay()}>&#10218;</span>
          <DateComponent date={this.state.date} />
          <span className="date-fast-forward" onClick={() => this.fastForwardByOneDay()}>&#10219;</span>
        </h2>

        <h1>Morning Prayer</h1>

        <div className="prayer">
          <Intro texts='morning' />
          <Confession intro="short" />
          <Invitatory texts="morning" />
          <Psalter psalms={this.state.psalms} />
          <Lesson
            postFirstReading={brevity === 'short' ? 'none' : 'te-deum-laudamus'}
            postSecondReading={brevity === 'short' ? 'none' : 'benedictus'}
            references={this.state.references}
            lessons={this.state.lessons} />
          { brevity === 'long' ? <ApostlesCreed /> : null }
          { brevity === 'medium' || brevity === 'long' ? <Prayer /> : null }
          <DailyCollect collects='morning' />
          { brevity === 'long' ? <MissionPrayer /> : null }
          <FreePrayer />
          { brevity === 'long' ? <GeneralThanksgiving /> : null }
          <Closing />
        </div>
      </div>
    )
  }
}

MorningComponent.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
}

export default withRouter(MorningComponent)
