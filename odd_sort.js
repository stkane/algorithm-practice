/*
Given an array of numbers, perform an ascending sort on the odd numbers,
but leave the even numbers in their place.

Example:
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
	if(array.length === 0) {return array;}
  odds = [];
  for(let i = 0; i < array.length; i++) {
  	if(array[i] % 2 > 0) {
    odds.push(array[i]);
    }
  };
  for(let i = 0; i < odds.length; i++) {
  	let a = odds[i];
    let b = odds[i + 1];
    if(a > b) {
    	odds.splice(i, 2);
      odds.splice(i, 0, b);
      odds.splice(i + 1, 0, a);
      i -= 2;
    }
  };
  for(let i = 0; i < array.length; i++) {
  	if(array[i] % 2 > 0) {
    	array.splice(i, 1, odds[0]);
      odds.splice(0, 1);
    }
  };
  return array;
}