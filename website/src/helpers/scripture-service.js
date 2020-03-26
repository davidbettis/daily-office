// Interface to interact with the web service that returns text from the ESV.
//
// TODO cache the results of these service calls on the client


export class ScriptureService {

    static SCRIPTURE_SERVICE_CACHE = {}
    static SCRIPTURE_SERVICE_ENDPOINT = 'https://pd0vgs56hb.execute-api.us-east-1.amazonaws.com/default/';

    // Gets the lessons and psalms for the provided office/date combo.
    // @return a promise with the results of the service call
    static getScriptureForOffice(office, date) {

        var dateYmd = ScriptureService.ymd(date);

        // Check the in-memory cache and return a successful response, if present
        var cacheKey = office + '#' + dateYmd;
        var cacheEntry = ScriptureService.SCRIPTURE_SERVICE_CACHE[cacheKey];
        if (cacheEntry) {
            return Promise.resolve(new Response(new Blob([cacheEntry])));
        }

        // Otherwise, fetch the contents
        var webServiceFullEndpoint = ScriptureService.SCRIPTURE_SERVICE_ENDPOINT + 'daily-office-get-scripture?'
                    + 'date=' + dateYmd + '&office=' + office;

        var promise = fetch(webServiceFullEndpoint, {
            method: "GET",
            // TODO eliminate this
            credentials: "same-origin"
        });

        // ... and cache it, on success
        promise.then(result => {
            ScriptureService.SCRIPTURE_SERVICE_CACHE[key] = result;
            return result;
        });

        // Finally, return the original request for final processing by the client.
        return promise;
    }

    // Returns the Y-M-D version of the provided date (Date object).
    static ymd(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1; // month, 1-12
        var day = date.getDate(); // day, 1-31

        return year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
    }
}

export default ScriptureService;
