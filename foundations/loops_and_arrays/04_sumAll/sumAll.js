const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
    return "ERROR"
  }
  if (a > b) {
    let sum = 0;
    for (let i = a; i >= b; i--) {
      sum += i;
    }
    return sum;
  } else {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  }
};

//console.log(sumAll(1, 4000));

// Do not edit below this line
module.exports = sumAll;
