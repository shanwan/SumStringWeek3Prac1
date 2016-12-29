// Sum String
//
// Write a function that takes as input a string that only contains numbers e.g. '1245'. Your function should take each individual character in the string and sum them together e.g. '1234' returns '13'
// Bonus
//
// Allow the string to include negative values e.g. '12-23' returns '4'

var total = 0
var negNum = 0

function sumString (inputString) {
  var total = 0
  var arrString = inputString.split("");
  for (var i = 0; i < arrString.length; i++) {
    if (arrString[i] === '-') {
      var negNum = arrString.splice(i, i);
      negNum = negNum.join("");
      negNum = negNum * 1;
      console.log("test" + negNum);
      console.log(typeof negNum);
    }
    total = total + arrString[i]*1;
    console.log(arrString);
    console.log(total);
    // console.log(arrString[i]);
    }
  console.log(total+negNum);
  return total + negNum
}

sumString('12-23');

// var testString = [1,2,3,4]
// var sumNum = testString.reduce(function(a,b) {
//   return a+b
// })
//
// console.log(sumNum);
