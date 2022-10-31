const getDirection = (exitIndex, positionIndex) =>
  exitIndex > positionIndex ? "right" : "left";

const getExitMove = (floorIndex, numberLevels) => {
  const isGroundFloor = floorIndex === numberLevels - 1;
  return isGroundFloor ? "right" : "down";
};

const moveToExit = (exitIndex, positionIndex, exitInstructions) => {
  const direction = getDirection(exitIndex, positionIndex);
  const moves = Math.abs(exitIndex - positionIndex);
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
