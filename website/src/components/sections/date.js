import React from 'react';

export class DateComponent extends React.Component {
    constructor(props) {
        super(props);

        var dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        this.state = {
            date: props.date.toLocaleString('en-US', dateOptions)
        }
    }

    render() {
        return (<h2>{ this.state.date }</h2>);
    }
}

export default DateComponent;
