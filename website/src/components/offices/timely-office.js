import React from 'react'

import MorningComponent from './morning'
import EveningComponent from './evening'
import ComplineComponent from './compline'

// TimelyOffice renders the morning / evening / night component, according to the current time of the day.
function TimelyOffice(props) {
    var hour = props.date.getHours(); // 0-23

    // "morning" is midnight - 4:00pm
    // evening is 4pm (16:00) - 9pm (21:00)
    // compline is 9pm (21:00) - midnight

    var now = new Date();

    if (hour >= 16 && hour <= 20) {
        return (<EveningComponent date={now} />);
    } else if (hour >= 21) {
        return (<ComplineComponent date={now} />);
    } else {
        return (<MorningComponent date={now} />);
    }
}

export default TimelyOffice;
