//given an array, find the greatest and least sum
//by adding together all but one value in the array.

function miniMaxSum(arr) {
  arr = arr.sort((a, b) => a - b);
  let greatest = arr.reduce((acc, val) => acc + val) - arr[0];
  let least = arr.reduce((acc, val) => acc + val) - arr[arr.length - 1];
  
  return [least, greatest] 
}
