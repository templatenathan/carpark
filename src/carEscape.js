const carEscape = (startingFloor, startingPosition, levels) => {
  let floorIndex = levels.length - startingFloor;
  let positionIndex = startingPosition - 1;
  const output = [];
  for (floorIndex; floorIndex < levels.length; floorIndex++) {
    const exitIndex = levels[floorIndex].findIndex((space) => space === true);
    const direction = exitIndex > positionIndex ? "right" : "left";
    const moves = Math.abs(exitIndex - positionIndex);
    for (let i = 0; i < moves; i++) {
      output.push(direction);
    }
    const isGroundFloor = floorIndex === levels.length - 1;
    output.push(isGroundFloor ? "right" : "down");
    positionIndex = exitIndex;
  }

  return output;
};

module.exports = carEscape;
