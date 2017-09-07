/* 
An isogram is a word that has no repeating letters, 
consecutive or non-consecutive. Implement a function that 
determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example:
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram(str) {
	if(str.length == 0) {return true;}

	strLow = str.toLowerCase().split('');
  letterCount = {};

  for(let i = 0; i < strLow.length; i++) {
  	if(letterCount[strLow[i]] == null) {
    	letterCount[strLow[i]] = 1;
    }
    else {
    	letterCount[strLow[i]]++;
    }
  };
  
  var testArr = Object.keys(letterCount).map(function(key) {
    return letterCount[key];
  });
  var sumArr = 0;

  for(let i = 0; i < testArr.length; i++) {
  	sumArr += testArr[i];
  } 

  if(sumArr > testArr.length) {
  	return false;
  }
  else {
  	return true;
  }  
}