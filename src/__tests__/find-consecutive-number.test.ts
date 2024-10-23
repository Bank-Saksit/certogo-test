import { findConsecutiveNumber } from "../find-consecutive-number";

describe("findConsecutiveNumber", () => {
  it("should find the consecutive number", () => {
    expect(() => findConsecutiveNumber(1)).toThrow("sequenceLength must be greater than 1");
    expect(findConsecutiveNumber(2)).toStrictEqual([14, 15]);
    expect(findConsecutiveNumber(3)).toStrictEqual([644, 645, 646]);
    expect(findConsecutiveNumber(4)).toStrictEqual([134043, 134044, 134045, 134046]);
  });
});
