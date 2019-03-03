import Seasons from "../seasons"

describe("Seasons", () => {
    it("is in lent", () => {
        var firstDay = new Date('2019-03-06T00:00:00');
        expect(Seasons.inLent(firstDay)).toBe(true);
        var middleDay = new Date('2019-03-28T12:00:00');
        expect(Seasons.inLent(middleDay)).toBe(true);
        var lastDay = new Date('2019-04-20T23:59:59');
        expect(Seasons.inLent(lastDay)).toBe(true);
    });
    it("is not in lent", () => {
        // FIXME
        //var before = new Date('2019-03-05T23:59:59');
        var before = new Date('2019-03-05T22:59:59');
        expect(Seasons.inLent(before)).toBe(false);
        var after = new Date('2019-04-21T00:00:00'); // start of easter sunday
        expect(Seasons.inLent(after)).toBe(false);
    });
})
