import React from 'react'

import ApostlesCreed from '../sections/apostles-creed'
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

import { ESVLink } from '../esv-link'

class MorningComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      brevity: 'short',
      psalms: [],
      lessons: []
    }
  }

  updateBrevity (brevity) {
    this.setState({ brevity: brevity })
  }

  componentDidMount () {
    this.fetchScripture(this.props.date)
  }

  componentDidUpdate (prevProps) {
    if (this.props.date !== prevProps.date) {
      this.fetchScripture(this.props.date)
    }
  }

  fetchScripture (date) {
    ScriptureService.getScriptureForOffice('morning', date).then(results => {
      return results.json()
    }).then(data => {
      this.setState({
        psalms: data.body['morning-psalms'],
        lessons: data.body.morning
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

        <h1>Morning Prayer</h1>

        <DateComponent date={this.props.date} />

        <div className="prayer">
          <Intro texts='morning' />
          <Confession intro="short" after="short" />
          <Invitatory texts="morning" />
          <Psalter date={this.props.date} lectionary='morning' psalms={this.state.psalms} />
          <Lesson lectionary='morning'
            postFirstReading={this.state.brevity === 'short' ? 'none' : 'te-deum-laudamus'}
            postSecondReading={this.state.brevity === 'short' ? 'none' : 'benedictus'}
            date={this.props.date} lessons={this.state.lessons} />
          { this.state.brevity === 'long' ? <ApostlesCreed /> : null }
          { this.state.brevity === 'medium' || this.state.brevity === 'long' ? <Prayer /> : null }
          <DailyCollect collects='morning' />
          { this.state.brevity === 'long' ? <MissionPrayer /> : null }
          <FreePrayer />
          { this.state.brevity === 'long' ? <GeneralThanksgiving /> : null }
          <Closing />
        </div>
      </div>
    )
  }
}

export default MorningComponent
