const carEscape = require("../src/carEscape");

describe("carEscape", () => {
  it("should calculate number of steps when there is one floor, and far left starting position", () => {
    expect(carEscape()).toBe(10);
  });
});
