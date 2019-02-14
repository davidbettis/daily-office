import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DateComponent from '../components/date'

import ApostlesCreed from '../components/apostles-creed'
import GeneralThanksgiving from '../components/general-thanksgiving'
import IntroComponent from '../components/intro'
import InvitatoryPsalmComponent from '../components/invitatory-psalm'
import LordsPrayer from '../components/lords-prayer'
import MorningClosingComponent from '../components/morning-closing'
import MorningCollectComponent from '../components/morning-collect'
import MorningLessonComponent from '../components/morning-lesson'
import MorningPrayerMission from '../components/morning-prayer-mission'
import PsalterComponent from '../components/psalter'

const Morning = () => (
  <Layout>
    <SEO title="Morning Prayer" />
    <h1>Morning Prayer</h1>

    <DateComponent /> 

    <div class="prayer">

    <p><IntroComponent morning={true} /></p>

    <p class="section">Confession of Sin</p>
    <p class="instructions">The Officiant says to the People</p>
    <p>Let us humbly confess our sins to Almighty God.</p>

    <p>
    <div class="instructions">Silence is kept. All kneeling the Officiant and People say</div>
    </p>

    <p>
    Almighty and most merciful Father,<br/>
    we have erred and strayed from your ways like lost sheep.<br/>
    We have followed too much the devices and desires of our own hearts.<br/>
    We have offended against your holy laws.<br/>
    We have left undone those things which we ought to have done,<br/>
    and we have done those things which we ought not to have done;<br/>
    and apart from your grace, there is no health in us.<br/>
    O Lord, have mercy upon us.<br/>
    Spare all those who confess their faults.<br/>
    Restore all those who are penitent, according to your promises declared<br/>
    to all people in Christ Jesus our Lord;<br/>
    And grant, O most merciful Father, for his sake,<br/>
    that we may now live a godly, righteous, and sober life,<br/>
     to the glory of your holy Name. <i>Amen.</i><br/>
    </p>

    <p>
    <div class="instructions">The Priest alone stands and says</div>
    </p>

    <p>The Almighty and merciful Lord grant you absolution and remission of all your sins, true repentance, amendment of life, and the grace and consolation of his Holy Spirit. Amen.</p>

    <p>
    <div class="instructions">A deacon or layperson remains kneeling and prays</div>
    </p>

    <p>
    Grant your faithful people, merciful Lord, pardon and peace; that we may be cleansed from all our sins, and serve you with a quiet mind; through Jesus Christ our Lord. Amen.
    </p>

    <p class="section">Invitatory</p>
    <p class="instructions">All stand.</p>
    
    <p>
    <div class="officiant">O Lord, open our lips;</div>
    <div class="people">And our mouth shall proclaim your praise.</div>
    <div class="officiant">O God, make speed to save us;</div>
    <div class="people">O Lord, make haste to help us.</div>
    <div class="officiant">Glory be to the Father, and to the Son, and to the Holy Spirit;</div>
    <div class="people">As it was in the beginning, is now, and ever shall be, world without end. Amen.</div>
    <div class="officiant">Praise the Lord.</div>
    <div class="people">The Lord’s name be praised.</div>
    </p>

    <InvitatoryPsalmComponent />

    <p class="section">Psalms Appointed</p>

    <PsalterComponent />

    <p class="section">The Lessons</p>

    <MorningLessonComponent />

    <p class="section">The Apostles’ Creed</p>

    <p class="instructions">Officiant and People together, all standing</p>

    <p><ApostlesCreed /></p>

    <p class="section">The Prayers</p>

    <p class="instructions">The People kneel or stand.</p>

    <p>
    <div class="officiant">The Lord be with you.</div>
    <div class="people">And with your spirit.</div>
    <div class="officiant">Let us pray.</div>
    </p>

    <p class="instructions">Officiant and People</p>

    <p><LordsPrayer /></p>

    <p>
    <div class="officiant">O Lord, show your mercy upon us;</div>
    <div class="people">And grant us your salvation.</div>
    <div class="officiant">O Lord, guide those who govern us;</div>
    <div class="people">And lead us in the way of justice and truth.</div>
    <div class="officiant">Clothe your ministers with righteousness;</div>
    <div class="people">And let your people sing with joy.</div>
    <div class="officiant">O Lord, save your people;</div>
    <div class="people">And bless your inheritance.</div>
    <div class="officiant">Give peace in our time, O Lord;</div>
    <div class="people">And defend us by your mighty power.</div>
    <div class="officiant">Let not the needy, O Lord, be forgotten;</div>
    <div class="people">Nor the hope of the poor be taken away.</div>
    <div class="officiant">Create in us clean hearts, O God;</div>
    <div class="people">And take not your Holy Spirit from us.</div>
    </p>

    <p><MorningCollectComponent /></p>

    <p><MorningPrayerMission /></p>

    <p class="section">The General Thanksgiving</p>
    <p><div class="instructions">Officiant and People</div></p>
    <p><GeneralThanksgiving /></p>

    <p>
    <div class="officiant">Let us bless the Lord.</div>
    <div class="people">Thanks be to God.</div>
    </p>

    <p class="instructions">Officiant and People</p>

    <p><MorningClosingComponent /></p>

    </div>

    <p class="footnote">
    <a href='http://anglicanchurch.net/?/main/texts_for_common_prayer'>The Daily Office</a> as established by the <a href='http://anglicanchurch.net/?/main/texts_for_common_prayer'>Anglican Church in North America (ACNA)</a>. Last revised 9/26/18.
    </p>

  </Layout>
)

export default Morning
