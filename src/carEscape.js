const carEscape = (startingFloor, startingPosition, levels) => {
  const output = [];
  for (let floor = startingFloor; floor > 0; flooor--) {}
  for (let i = startingPosition; i < levels[startingFloor].length; i++) {
    output.push("right");
  }
  return output;
};

module.exports = carEscape;
