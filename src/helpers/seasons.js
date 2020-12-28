import * as DateEaster from 'date-easter'

// Class to compare the current time against church seasons (e.g. Lent, Eastertide, etc.)
export class Seasons {
  static inLent (epochTimeMS) {
    var time = epochTimeMS || new Date().getTime()
    // Lent starts on Ash Wednesday, which is "exactly 46 days before Easter Sunday"
    // https://en.wikipedia.org/wiki/Ash_Wednesday#Dates
    var easterTime = this.getEasterEpochTime(time)
    // FIXME this doesn't take into account daylight savings time, which ends during lent. ha.
    // TODO migrate to Luxon or another Javascript library to make this adjustment
    var lentTime = easterTime - (46 * 86400000) // epoch in ms
    return (time >= lentTime && time < easterTime)
  }

  static getEasterEpochTime (epochTimeMS) {
    var date = new Date(0)
    date.setUTCSeconds(epochTimeMS / 1000)
    var year = date.getFullYear()
    var easter = DateEaster.easter(year)
    return new Date(easter.year, easter.month - 1, easter.day, 0, 0, 0).getTime() // epoch ms
  }

  static inEastertide (epochTimeMS) { // date is epoch time in MS
    var time = epochTimeMS || new Date().getTime()
    // Easter season starts on easter and lasts for 50 days
    // "Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday."
    // https://en.wikipedia.org/wiki/Eastertide
    var easterTime = this.getEasterEpochTime(time)
    var easterTimeEnd = easterTime + (50 * 86400000) // epoch in ms
    return (time >= easterTime && time < easterTimeEnd)
  }
}

export default Seasons
