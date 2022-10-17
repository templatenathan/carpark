const carEscape = require("../src/carEscape");

describe("carEscape", () => {
  it("when parked one spot to the left of the exit, the output should be 'right' to move to the exit", () => {
    const startingPosition = 0;
    const startingFloor = 0;
    expect(
      carEscape(startingFloor, startingPosition, [[false, true]])
    ).toStrictEqual(["right", "right"]);
  });

  it("when parked on the spot that is second left of the exit, the path to exit the car park would be 'right, right'", () => {
    const startingPosition = 0;
    const startingFloor = 0;
    expect(
      carEscape(startingFloor, startingPosition, [[false, false, true]])
    ).toStrictEqual(["right", "right", "right"]);
  });
});
