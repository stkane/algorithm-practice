// You are given an odd-length array of 
// integers, in which all of them are the 
// same, except for one single number.

// Implement the method stray which accepts 
// such array, and returns that single different 
// number.

// The input array will always be valid! 
// (odd-length >= 3)

// Examples:

// [1, 1, 2] => 2

// [17, 17, 3, 17, 17, 17, 17] => 3

function stray(numbers) {
  a = numbers[0];
  b = numbers[1];
  c = numbers[2];
  answer = null;
  if(a === b && b === c) {
  	answer = numbers.filter( num => num != a);
    answer = answer[0];
  }
  else {
  	a === b ? answer = c : answer;
    a === c ? answer = b : answer;
    b === c ? answer = a : answer;
  }
  return answer;
}