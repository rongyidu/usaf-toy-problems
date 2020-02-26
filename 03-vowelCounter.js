/*

Write a function that, given a string, returns the number of vowels in that string.

We will consider that a, e, i, o and u are vowels for the sake of this problem.

Ex:

vowelCounter("Banana")
--> Returns 3
vowelCounter("Hawaii")
--> Returns 4

 */

var vowelCounter = function(string) {
  var count = 0;
  var myString = string.toUpperCase();
  // var stringArr = myString.split("");
  var vowels = ["a","e","i","o","u"];
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count ++;
    }
  }
  return count;
};

console.log(vowelCounter("Banana"))
