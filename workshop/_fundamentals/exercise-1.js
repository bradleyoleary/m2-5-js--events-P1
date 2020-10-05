// Exercise 1
//
// 1. Write a function that returns the sum of the letter count of each string in the array
// e.g. letterCount(["crisp", "bacon"]) returns 10

const letterCount = (arr) => {
  // Insert missing solution please
  //assigning the sum the value of 0
  let sum = 0;
  //iterate over the string
  arr.forEach(function(str) {
  //add sum to string - string length starts at 0 so It will incr amount of chars
  sum += str.length;
});
return sum;
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = letterCount;
