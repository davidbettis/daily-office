import React from 'react'

import MorningComponent from '../components/morning'
import EveningComponent from '../components/evening'
import ComplineComponent from '../components/compline'

// TimelyOffice renders the morning / evening / night component, according to the current time of the day.
export class TimelyOffice extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        var hour = new Date().getHours(); // 0-23

        // "morning" is midnight - 4:00pm
        // evening is 4pm (16:00) - 9pm (21:00)
        // compline is 9pm (21:00) - midnight

        if (hour >= 16 && hour <= 20) {
            return (<EveningComponent />);
        } else if (hour >= 21) {
            return (<ComplineComponent />);
        } else {
            return (<MorningComponent />);
        }
    }
}

export default TimelyOffice
