import React from 'react'

import LordsPrayer from '../components/lords-prayer'

const Prayer = () => (
    <div>
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
    </div>
);

export default Prayer
