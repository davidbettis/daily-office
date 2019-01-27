import React from 'react';
import * as DateEaster from 'date-easter'

// AlleluiaComponent prints out alleluias according to Easter or Lent
export class AlleluiaComponent extends React.Component {

    // Constructs a new AlleluiaComponent
    //    props.forEaster: print out 3 alleluias for easter
    //    props.notLent:   when not in lent, print out 1 alleluia
    constructor(props) {
        super(props);

	// Easter season starts on easter and lasts for 50 days
	// "Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday."
	// https://en.wikipedia.org/wiki/Eastertide
	var currentDate = new Date();
	var currentTime = currentDate.getTime(); // epoch ms
	var currentYear = currentDate.getFullYear();
	var easter = DateEaster.easter(currentYear);
	var easterTime = new Date(easter.year, easter.month, easter.day, 0, 0, 0).getTime(); // epoch ms
	var easterTimeEnd = easterTime + (50 * 86400000); // epoch in ms
	var inEaster = (currentTime >= easterTime && currentTime < easterTimeEnd);

	// Lent starts on Ash Wednesday, which is "exactly 46 days before Easter Sunday"
	// https://en.wikipedia.org/wiki/Ash_Wednesday#Dates
	var lentTime = easterTime - (46 * 86400000); // epoch in ms
	var inLent = (currentTime >= lentTime && currentTime < easterTime);

	this.state = {
		forEaster: props.forEaster,
		notLent: props.notLent,
		inEaster: inEaster,
		inLent: inLent
	}
    }

    render() {
	if (this.state.forEaster) {
		if (this.state.inEaster) {
			return (<div><span class="people">Alleluia, alleluia, alleluia.</span></div>);
		} else {
			return (<div/>);
		}
	} else if (this.state.notLent) {
		if (this.state.inLent) {
			return (<div/>);
		} else {
			return (<div><span class="people">Alleluia.</span></div>);
		}
	} else {
		return (<div/>);
	}
    }
}

export default AlleluiaComponent
