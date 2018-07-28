// Given a 6 x 6 2D Array, arr:

// [[1, 1, 1, 0, 0, 0],
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0]]

// We define an hourglass, A to be
// a subset of values with indices
// falling in this pattern in arr's
// graphical representation:

// a b c
//   d 
// e f g

// there are 16 hourglasses in arr,
// and an hourglass sum is the sum of
// an hourglass' values. Calculate the
// hourglass sum for every hourglass in 
// arr and then print the max hourglass value in the array.



function hourglassSum(arr) {
  arr = [].concat.apply([], arr);
  let greatestSum;
  for(let i = 0; i < 22; i++) {
    if(i % 6 <= 3) {
      let sum = arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 7] + arr[i + 12] + arr[i + 13] + arr[i + 14];
      if(greatestSum === undefined) {
          greatestSum = sum;
      } else{
        sum > greatestSum ? greatestSum = sum : greatestSum;
      }
    }
  }
  return greatestSum;
}
