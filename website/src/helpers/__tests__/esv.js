import ESV from "../esv"

describe("ESV", () => {
    it("finds apocrypha", () => {
        expect(ESV.isApocryphal("1 Macc")).toBe(true);
    });
    it("does not finds apocrypha", () => {
        expect(ESV.isApocryphal("John")).toBe(false);
    });
    it("creates an esv.to link", () => {
        expect(ESV.makeURL("Exodus 1", "ESV")).toMatch(/esv.to/);
    });
    it("ignores shortened passages", () => {
        expect(ESV.makeURL("Exodus 1 † 1-20", "ESV")).not.toMatch(/20/);
    });
})
