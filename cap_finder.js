// Instructions

// Write a function that takes a single string (word) as argument. 
// The function must return an ordered list containing the indexes of 
// all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  splitWord = word.split('');
  indexes = [];
  for(let i = 0; i < splitWord.length; i++) {
  	if (splitWord[i] === splitWord[i].toUpperCase()) {
    	indexes.push(i);
    }
  };
  return indexes;
};