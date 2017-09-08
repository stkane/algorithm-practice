/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.
*/

function findUniq(arr) {
  numCount = {};
  for(let i = 0; i < arr.length; i++) {
  	if(numCount[arr[i]] == null) {
    	numCount[arr[i]] = 1;
    }
    else {
    	numCount[arr[i]]++;
    }
  };
  numCountKeys = Object.keys(numCount);
  for(let i = 0; i < numCountKeys.length; i++) {
  	if(numCount[numCountKeys[i]] === 1) {
    	return Number(numCountKeys[i]);
    }
  };
}