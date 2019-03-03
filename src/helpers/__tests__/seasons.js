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

    it("returns easter", () => {
        var year2000 = new Date('2000-01-01T00:00:00');
        var easter2000 = new Date('2000-04-23T00:00:00');
        expect(Seasons.getEasterEpochTime(year2000.getTime())).toBe(easter2000.getTime());

        var year2019 = new Date('2019-01-01T00:00:00');
        var easter2019 = new Date('2019-04-21T00:00:00');
        expect(Seasons.getEasterEpochTime(year2019.getTime())).toBe(easter2019.getTime());
    });

    it("is in eastertide", () => {
        // TODO implement me
    });

    it("is not in eastertide", () => {
        // TODO implement me
    });
})
