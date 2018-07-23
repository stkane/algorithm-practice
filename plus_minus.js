// Given an array of integers, calculate the fractions 
// of its elements that are positive, negative, and are 
// zeros. Print the decimal value of each fraction on a new line.

function plusMinus(arr) {
  let total = arr.length;
  let pos = arr.filter(nums => nums > 0);
  let neg = arr.filter(nums => nums < 0);
  let zero = arr.filter(nums => nums === 0);

  console.log(pos.length/total)
  console.log(neg.length/total)
  console.log(zero.length/total)
}
