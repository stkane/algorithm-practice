/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

Example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/


function uniqueInOrder(iter) {
	if(Array.isArray(iter)) {
  	for(let i = 0; i < iter.length; i++) {
    	if(iter[i] == iter[i+1]) {
      	iter.splice(i, 1);
      }
    };
    return iter;
  }
  else if(typeof iter == 'string') {
  	iter = iter.split('');
    for(let i = 0; i < iter.length; i++) {
    	if(iter[i] == iter[i+1]) {
      	iter.splice(i, 1);
        i = i - 1;
      }
    };
    return iter;
  }
}