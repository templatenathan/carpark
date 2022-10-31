const { getDirection } = require("./helper.js");

const getExitMove = (floorIndex, numberLevels) => {
  const isGroundFloor = floorIndex === numberLevels - 1;
  return isGroundFloor ? "right" : "down";
};

const moveToExit = (exitIndex, startIndex, exitInstructions) => {
  const direction = getDirection(startIndex, exitIndex);
  const moves = Math.abs(exitIndex - startIndex);
  for (let i = 0; i < moves; i++) {
    exitInstructions.push(direction);
  }
};

const carEscape = (startingFloor, startingPosition, levels) => {
  let floorIndex = levels.length - startingFloor;
  let positionIndex = startingPosition - 1;
  const exitInstructions = [];
  for (floorIndex; floorIndex < levels.length; floorIndex++) {
    const exitIndex = levels[floorIndex].findIndex((space) => space === true);
    moveToExit(exitIndex, positionIndex, exitInstructions);
    exitInstructions.push(getExitMove(floorIndex, levels.length));
    positionIndex = exitIndex;
  }

  return exitInstructions;
};

module.exports = carEscape;
