import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DateComponent from '../components/date'

import ApostlesCreed from '../components/apostles-creed'
import Closing from '../components/closing'
import Confession from '../components/confession'
import DailyCollect from '../components/daily-collect'
import GeneralThanksgiving from '../components/general-thanksgiving'
import Intro from '../components/intro'
import Invitatory from '../components/invitatory'
import Lesson from '../components/lesson'
import MissionPrayer from '../components/mission-prayer'
import Prayer from '../components/prayer'
import Psalter from '../components/psalter'

const Evening = () => (
  <Layout>
    <SEO title="Evening Prayer" />
    <h1>Evening Prayer</h1>

    <DateComponent /> 

    <div class="prayer">

        <p><Intro texts='evening' /></p>

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

        <Psalter series='evening' />

        <p class="section">The Lessons</p>

        <Lesson lectionary='evening'
                postFirstReading='magnificat'
                postSecondReading='nunc-dimittis' />

        <ApostlesCreed />

        <Prayer />

        <DailyCollect collects='evening' />

        <MissionPrayer />

        <p class="instructions">Free intercessions and thanksgivings may be offered.</p>

        <p class="section">The General Thanksgiving</p>
        <p><div class="instructions">Officiant and People</div></p>
        <p><GeneralThanksgiving /></p>

        <div>
          <p>
            <div class="officiant">Let us bless the Lord.</div>
            <div class="people">Thanks be to God.</div>
          </p>
        </div>

        <p class="instructions">Officiant and People</p>

        <Closing />
    </div>

    <p class="footnote">
    <a href='http://anglicanchurch.net/?/main/texts_for_common_prayer'>The Daily Office</a> as established by the <a href='http://anglicanchurch.net/?/main/texts_for_common_prayer'>Anglican Church in North America (ACNA)</a>. Last revised 9/26/18.
    </p>

  </Layout>
)

export default Evening
