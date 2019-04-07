import React from 'react'

import LordsPrayer from './lords-prayer'

const Prayer = () => (
    <div>
    <p className="section">The Prayers</p>

    <p className="instructions">The People kneel or stand.</p>

    <p>
    <span className="officiant">The Lord be with you.</span><br/>
    <span className="people">And with your spirit.</span><br/>
    <span className="officiant">Let us pray.</span><br/>
    </p>

    <p className="instructions">Officiant and People</p>

    <LordsPrayer />

    <p>
    <span className="officiant">O Lord, show your mercy upon us;</span><br/>
    <span className="people">And grant us your salvation.</span><br/>
    <span className="officiant">O Lord, guide those who govern us;</span><br/>
    <span className="people">And lead us in the way of justice and truth.</span><br/>
    <span className="officiant">Clothe your ministers with righteousness;</span><br/>
    <span className="people">And let your people sing with joy.</span><br/>
    <span className="officiant">O Lord, save your people;</span><br/>
    <span className="people">And bless your inheritance.</span><br/>
    <span className="officiant">Give peace in our time, O Lord;</span><br/>
    <span className="people">And defend us by your mighty power.</span><br/>
    <span className="officiant">Let not the needy, O Lord, be forgotten;</span><br/>
    <span className="people">Nor the hope of the poor be taken away.</span><br/>
    <span className="officiant">Create in us clean hearts, O God;</span><br/>
    <span className="people">And take not your Holy Spirit from us.</span><br/>
    </p>

    </div>
);

export default Prayer;
