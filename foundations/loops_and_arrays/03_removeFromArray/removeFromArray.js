const removeFromArray = function(arr, ...args) {
  let index = 0;
  for (let x of args) {
    while(arr.includes(x)) {
      index = arr.findIndex(item => item === x);
      arr.splice(index, 1);
    }
  }
  return arr;
};

//console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
