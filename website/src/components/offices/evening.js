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

class EveningComponent extends React.Component {
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

        <h1>Evening Prayer</h1>

        <DateComponent date={this.props.date} />

        <div className="prayer">
          <Intro texts='evening' />
          <Confession intro="long" after="long" />
          <Invitatory texts="evening" />
          <Psalter lectionary='evening' date={this.props.date} psalms={this.state.psalms} />
          <Lesson lectionary='evening'
            postFirstReading={this.state.brevity === 'short' ? 'none' : 'magnificat'}
            postSecondReading={this.state.brevity === 'short' ? 'none' : 'nunc-dimittis'}
            date={this.props.date} lessons={this.state.lessons} />
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
