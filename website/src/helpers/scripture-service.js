// Interface to interact with the web service that returns text from the ESV.
//
// TODO cache the results of these service calls on the client

export class ScriptureService {
  // Gets the lessons and psalms for the provided office/date combo.
  // @return a promise with the results of the service call
  static getScriptureForOffice (office, date) {
    var dateYmd = ScriptureService.ymd(date)

    // Fetch the contents
    var webServiceFullEndpoint = ScriptureService.ENDPOINT + 'scripture?' +
          'date=' + dateYmd + '&office=' + office

    return fetch(webServiceFullEndpoint, {
      method: 'GET',
      // TODO eliminate this
      credentials: 'same-origin'
    })
  }

  // Returns the Y-M-D version of the provided date (Date object).
  static ymd (date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1 // month, 1-12
    var day = date.getDate() // day, 1-31

    return year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0')
  }
}

ScriptureService.ENDPOINT = 'https://daily-office-v2.api.davidbettis.com/'

export default ScriptureService
