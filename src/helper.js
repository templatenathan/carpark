const getDirection = (startIndex, exitIndex) =>
  exitIndex > startIndex ? "right" : "left";

module.exports = { getDirection };
