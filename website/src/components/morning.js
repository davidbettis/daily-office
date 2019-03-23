import React from 'react'

import ApostlesCreed from './apostles-creed'
import Closing from './closing'
import Confession from './confession'
import DateComponent from './date'
import DailyCollect from './daily-collect'
import GeneralThanksgiving from './general-thanksgiving'
import Intro from './intro'
import Invitatory from './invitatory'
import InvitatoryPsalm from './invitatory-psalm'
import Lesson from './lesson'
import MissionPrayer from './mission-prayer'
import Prayer from './prayer'
import Psalter from './psalter'

const MorningComponent = () => (
  <div>
    <h1>Morning Prayer</h1>

    <DateComponent /> 

    <div class="prayer">
        <Intro texts='morning' />

        <Confession />

        <Invitatory />
        <InvitatoryPsalm />

        <p class="section">Psalms Appointed</p>
        <Psalter series='morning' />

        <p class="section">The Lessons</p>
        <Lesson lectionary='morning' postFirstReading='te-deum-laudamus' postSecondReading='benedictus' />

        <ApostlesCreed />

        <Prayer />
        <DailyCollect collects='morning'  />
        <MissionPrayer />

        <p class="instructions">Free intercessions and thanksgivings may be offered.</p>

        <p class="section">The General Thanksgiving</p>
        <div class="instructions">Officiant and People</div>

        <GeneralThanksgiving />

        <br/>

        <div>
          <span class="officiant">Let us bless the Lord.</span><br/>
          <span class="people">Thanks be to God.</span><br/><br/>
        </div>

        <p class="instructions">Officiant and People</p>

        <Closing />
    </div>

    <p class="footnote">
      <a href='http://anglicanchurch.net/?/main/texts_for_common_prayer'>The Daily Office</a> as established by the <a href='http://anglicanchurch.net'>Anglican Church in North America (ACNA)</a>. Last revised 9/26/18.
    </p>
  </div>
);

export default MorningComponent;
