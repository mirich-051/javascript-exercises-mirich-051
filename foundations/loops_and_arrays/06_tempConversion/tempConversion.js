const convertToCelsius = function(f) {
  let cel = (f - 32) * (5/9);
  if (!Number.isInteger(cel)) {
    return cel.toFixed(1)
  }
  return cel;
};

const convertToFahrenheit = function(c) {
  let fah = (c * (9/5)) + 32;
  if (!Number.isInteger(fah)) {
    return fah.toFixed(1)
  }
  return fah;
};

//console.log(convertToCelsius(-100));
//console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
