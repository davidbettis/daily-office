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

export class MorningComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brevity: 'short',
        };
    }

    updateBrevity(brevity) {
        this.setState({brevity: brevity});
    }

    render() {
        return (
<div>
  <div style={{float: 'right'}}>
    <span className={this.state.brevity === "short" ? "duration-selected" : "duration"} onClick={() => this.updateBrevity('short')}>Short (~15 min)</span><br/>
    <span className={this.state.brevity === "medium" ? "duration-selected" : "duration"} onClick={() => this.updateBrevity('medium')}>Medium (~30 min)</span><br/>
    <span className={this.state.brevity === "long" ? "duration-selected" : "duration"} onClick={() => this.updateBrevity('long')}>Long (~45 min)</span>
  </div>

  <h1>Morning Prayer</h1>

  <DateComponent date={this.props.date} /> 

  <div className="prayer">
      <Intro texts='morning' />
      <Confession intro="short" after="short" />
      <Invitatory texts="morning" />
      <Psalter series='morning' date={this.props.date} />
      <Lesson lectionary='morning'
              postFirstReading={this.state.brevity === 'short' ? 'none' : 'te-deum-laudamus'}
              postSecondReading={this.state.brevity === 'short' ? 'none' : 'benedictus'}
              date={this.props.date} />
      { this.state.brevity === 'long' ? <ApostlesCreed /> : null }
      { this.state.brevity === 'medium' || this.state.brevity === 'long' ? <Prayer /> : null }
      <DailyCollect collects='morning' />
      { this.state.brevity === 'long' ? <MissionPrayer /> : null }
      <FreePrayer />
      { this.state.brevity === 'long' ? <GeneralThanksgiving /> : null }
      <Closing />
  </div>

  <p className="footnote">
    <a href='http://anglicanchurch.net/?/main/texts_for_common_prayer'>The Daily Office</a> as established by the <a href='http://anglicanchurch.net'>Anglican Church in North America (ACNA)</a>. Last revised 9/26/18.
  </p>
</div>
        );
    }
}

export default MorningComponent;
