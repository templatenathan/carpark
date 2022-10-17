const carEscape = (levels) => {
  const output = [];
  for (let i = 0; i < levels[0].length - 1; i++) {
    output.push("right");
  }
  return output;
};

module.exports = carEscape;
