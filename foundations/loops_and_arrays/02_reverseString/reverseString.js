const reverseString = function(str) {
  let revStr = "";
  for (let i = str.length-1; i > -1; i-- ) {
    revStr += str[i];
  }
  return revStr;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
