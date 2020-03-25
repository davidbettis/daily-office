import React from 'react';
import ESVLink from '../esv-link'

import MorningPsalmLectionary from '../../data/psalms-morning-lectionary.json'
import EveningPsalmLectionary from '../../data/psalms-evening-lectionary.json'

// Psalter prints out a psalm to read according to the current day and the series provided
function Psalter(props) {
    if (!(props.date instanceof Date)) {
        throw new Error("Psalter error: date must be a Date object");
    }

    var month = props.date.getMonth() + 1; // month, 1-12
    var day = props.date.getDate(); // day, 1-31

    var psalms;
    if (props.series === 'morning') {
        psalms = MorningPsalmLectionary[month][day];
    } else if (props.series === 'evening') {
        psalms = EveningPsalmLectionary[month][day];
    } else {
        throw new Error("Psalter error: series must specify one of ['morning','evening']");
    }

    var psalmRef = "Psalm+" + psalms.join(',');
    var psalmLinkText = "(ESV)";

    return (
        <div>
          <p className="section">Psalms Appointed</p>
          <p>Psalm { psalms.join(', ') } <ESVLink scriptureText={psalmRef} linkText={psalmLinkText} /></p>
          <p>
            <span className="officiant">☩ Glory be to the Father, and to the Son, and to the Holy Spirit; *</span><br/>
            <span className="people">As it was in the beginning, is now, and ever shall be, world without end. Amen.</span><br/>
          </p>
        </div>
    );
}

export default Psalter;
