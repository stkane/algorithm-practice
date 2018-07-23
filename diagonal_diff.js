// Given a square matrix, calculate the absolute difference 
// between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1 + 5 + 9 = 15. 
// The right to left diagonal = 3 + 5 + 9 = 17. 
// Their absolute difference is |15 - 17| = 2.

function diagonalDifference(arr) {
  let rows = arr.length;
  let lastRowIndex = arr[0].length - 1;
  let leftSum = 0;
  let rightSum = 0;
  for(let i = 0; i < rows; i++) {
    leftSum += arr[i][i]
    rightSum += arr[i][lastRowIndex];
    lastRowIndex--;
  }
  return Math.abs(leftSum - rightSum);
}
