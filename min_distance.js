// Given an array, find the min
// absolute distance between two 
// numbers in the array.


function minimumAbsoluteDifference(arr) {
  arr = arr.sort((a, b) => a - b);
  let diff = Math.abs(arr[0] - arr[1]);
  for(let i = 1; i < arr.length; i++){
    let currDiff = Math.abs(arr[i] - arr[i + 1]);
    currDiff < diff ? diff = currDiff : diff;
  }
  return diff;
}
