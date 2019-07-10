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
            date: props.date
        };
    }

    render() {
        return (
<div>
  <h1>Morning Prayer</h1>

  <DateComponent date={this.state.date} /> 

  <div className="prayer">
      <Intro texts='morning' />
      <Confession intro="short" after="short" />
      <Invitatory texts="morning" />
      <Psalter series='morning' date={this.state.date} />
      <Lesson lectionary='morning'
              postFirstReading='te-deum-laudamus'
              postSecondReading='benedictus'
              date={this.state.date} />
      <ApostlesCreed />
      <Prayer />
      <DailyCollect collects='morning' />
      <MissionPrayer />
      <FreePrayer />
      <GeneralThanksgiving />
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
