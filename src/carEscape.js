const carEscape = (startingFloor, startingPosition, levels) => {
  const output = [];
  for (let currentFloor = startingFloor; currentFloor >= 0; currentFloor--) {
    for (let i = startingPosition; i < levels[currentFloor].length; i++) {
      if (currentFloor !== 0 && levels[currentFloor][i] === true) {
        output.push("down");
      } else if (currentFloor === 0 && levels[currentFloor][i] === true) {
        output.push("right");
      } else {
        output.push("right");
      }
    }
  }

  return output;
};

module.exports = carEscape;
