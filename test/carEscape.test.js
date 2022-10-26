const carEscape = require("../src/carEscape");

describe("carEscape", () => {
  it("when parked one spot to the left of the exit, the output should be 'right' to move to the exit", () => {
    const startingPosition = 1;
    const startingFloor = 1;
    expect(
      carEscape(startingFloor, startingPosition, [[false, true]])
    ).toStrictEqual(["right", "right"]);
  });

  it("when parked on the spot that is second left of the exit, the path to exit the car park would be 'right, right'", () => {
    const startingPosition = 1;
    const startingFloor = 1;
    expect(
      carEscape(startingFloor, startingPosition, [[false, false, true]])
    ).toStrictEqual(["right", "right", "right"]);
  });

  it("when we have 2 stories car park and we are parked on the first floor, parked one space from the stairwell", () => {
    const startingPosition = 1;
    const startingFloor = 2;
    expect(
      carEscape(startingFloor, startingPosition, [
        [false, true], // floor 2
        [false, true], // floor 1
      ])
    ).toStrictEqual(["right", "down", "right"]);
  });

  test("should escape when there are two levels and going both directions is necessary", () => {
    const startingPosition = 4;
    const startingFloor = 2;
    expect(
      carEscape(startingFloor, startingPosition, [
        [false, true, false, false, false], // floor 2
        [false, false, false, false, true], // floor 1
      ])
    ).toStrictEqual([
      "left",
      "left",
      "down",
      "right",
      "right",
      "right",
      "right",
    ]);
  });

  test("should escape when there are three levels and the stairwell spans two floors", () => {
    const startingPosition = 1;
    const startingFloor = 3;
    expect(
      carEscape(startingFloor, startingPosition, [
        [false, true, false, false, false], // floor 3
        [false, true, false, false, false], // floor 2
        [false, false, false, false, true], // floor 1
      ])
    ).toStrictEqual([
      "right",
      "down",
      "down",
      "right",
      "right",
      "right",
      "right",
    ]);
  });
});
