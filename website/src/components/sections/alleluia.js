import React from 'react';
import Seasons from '../../helpers/seasons'

// Alleluia prints out alleluias according to Easter or Lent
function Alleluia(props) {
    var currentDate = new Date();
    var currentTime = currentDate.getTime(); // epoch ms

    var inEaster = Seasons.inEastertide(currentTime);
    var inLent = Seasons.inLent(currentTime);
    var forEaster = props.forEaster;
    var notLent = props.notLent;

    if (forEaster) {
        if (inEaster) {
            return (<div><span className="people">Alleluia, alleluia, alleluia.</span></div>);
        } else {
            return (<div/>);
        }
    } else if (notLent) {
        if (inLent) {
            return (<div/>);
        } else {
            return (<div><span className="people">Alleluia.</span></div>);
        }
    } else {
        return (<div/>);
    }
}

export default Alleluia;
