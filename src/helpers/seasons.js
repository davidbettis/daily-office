import * as DateEaster from 'date-easter'

// Class to compare the current time against church seasons (e.g. Lent, Eastertide, etc.)
// TODO unit tests
export class Seasons {
    constructor(props) {
    }

    static inLent(epochTimeMS) {
        // Lent starts on Ash Wednesday, which is "exactly 46 days before Easter Sunday"
        // https://en.wikipedia.org/wiki/Ash_Wednesday#Dates
        var easterTime = this.getEasterEpochTime();
        var lentTime = easterTime - (46 * 86400000); // epoch in ms
        return (epochTimeMS >= lentTime && epochTimeMS < easterTime);
    }

    static getEasterEpochTime() {
        var year = new Date().getFullYear();
        var easter = DateEaster.easter(year); 
        return new Date(easter.year, easter.month - 1, easter.day, 0, 0, 0).getTime(); // epoch ms
    }

    static inEastertide(epochTimeMS) { // date is epoch time in MS
        // Easter season starts on easter and lasts for 50 days
        // "Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday."
        // https://en.wikipedia.org/wiki/Eastertide
        var easterTime = this.getEasterEpochTime();
        var easterTimeEnd = easterTime + (50 * 86400000); // epoch in ms
        return (epochTimeMS >= easterTime && epochTimeMS < easterTimeEnd);
    }
}

export default Seasons
