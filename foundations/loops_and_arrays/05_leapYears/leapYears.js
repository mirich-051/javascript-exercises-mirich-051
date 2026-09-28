const leapYears = function(num) {
  if (num % 100 === 0  && num % 400 !== 0) {
    return `Leap Year ${num}: false`;
  } else if (num % 4 === 0) {
    return `Leap Year ${num}: true`;
  } else {
    return `Leap Year ${num}: false`;
  }
};

//console.log(leapYears(1600));

// Do not edit below this line
module.exports = leapYears;
