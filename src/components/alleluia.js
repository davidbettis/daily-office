import React from 'react';
import Seasons from '../helpers/seasons'

// Alleluia prints out alleluias according to Easter or Lent
export class Alleluia extends React.Component {

    // Constructs a new Alleluia
    //    props.forEaster: print out 3 alleluias for easter
    //    props.notLent:   when not in lent, print out 1 alleluia
    constructor(props) {
        super(props);

        var currentDate = new Date();
        var currentTime = currentDate.getTime(); // epoch ms

        var inEaster = Seasons.inEaster(currentTime);
        var inLent = Seasons.inLent(currentTime);

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

export default Alleluia
