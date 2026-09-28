const repeatString = function(string, num) {
  if (typeof string !== "string") {
    return "ERROR";
  }
  let repeat = "";
  for (let i = 0; i < num; i++) {
    repeat += string
  }
  return repeat;
};

console.log(repeatString("hello", 10));
// Do not edit below this line
module.exports = repeatString;
