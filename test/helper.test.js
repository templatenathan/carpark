const { getDirection } = require("../src/helper.js");

describe("GIVEN car park", () => {
  describe("WHEN start index is left out the exit index", () => {
    it("THEN the function returns 'right'", () => {
      let startIndex = 1;
      let exitIndex = 2;
      expect(getDirection(startIndex, exitIndex)).toStrictEqual("right");
    });
  });

  describe("WHEN start index is right out the exit index", () => {
    it("THEN the function returns 'left'", () => {
      let startIndex = 2;
      let exitIndex = 1;
      expect(getDirection(startIndex, exitIndex)).toStrictEqual("left");
    });
  });
});
