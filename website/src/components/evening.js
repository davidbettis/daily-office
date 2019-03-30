import React from 'react'

import ApostlesCreed from './apostles-creed'
import Closing from './closing'
import Confession from './confession'
import DailyCollect from './daily-collect'
import DateComponent from './date'
import GeneralThanksgiving from './general-thanksgiving'
import Intro from './intro'
import Invitatory from './invitatory'
import Lesson from './lesson'
import MissionPrayer from './mission-prayer'
import Prayer from './prayer'
import Psalter from './psalter'

const EveningComponent = () => (
  <div>
    <h1>Evening Prayer</h1>

    <DateComponent /> 

    <div class="prayer">

        <Intro texts='evening' />

        <Confession />

        <Invitatory />

        <b>Phos hilaron</b> <i>O Gladsome Light</i>
        <p>
        O gladsome light,<br/>
        pure brightness of the everliving Father in heaven, *<br/>
        O Jesus Christ, holy and blessed!<br/>
        Now as we come to the setting of the sun,<br/>
        and our eyes behold the vesper light, *<br/>
        we sing your praises, O God: Father, Son, and Holy Spirit.<br/>
        You are worthy at all times to be praised by happy voices, *<br/>
        O Son of God, O Giver of Life,<br/>
        and to be glorified through all the worlds.<br/>
        </p>

        <p class="section">Psalms Appointed</p>

        <Psalter series='evening' date={new Date()} />

        <p class="section">The Lessons</p>

        <Lesson lectionary='evening'
                postFirstReading='magnificat'
                postSecondReading='nunc-dimittis'
                date={new Date()} />

        <ApostlesCreed />

        <Prayer />

        <DailyCollect collects='evening' />

        <MissionPrayer />

        <p class="instructions">Free intercessions and thanksgivings may be offered.</p>

        <p class="section">The General Thanksgiving</p>
        <p><div class="instructions">Officiant and People</div></p>
        <p><GeneralThanksgiving /></p>

        <div>
          <span class="officiant">Let us bless the Lord.</span><br/>
          <span class="people">Thanks be to God.</span><br/>
        </div>

        <br/>

        <p class="instructions">Officiant and People</p>

        <Closing />
    </div>

    <p class="footnote">
      <a href='http://anglicanchurch.net/?/main/texts_for_common_prayer'>The Daily Office</a> as established by the <a href='http://anglicanchurch.net'>Anglican Church in North America (ACNA)</a>. Last revised 9/26/18.
    </p>

  </div>
);

export default EveningComponent;
