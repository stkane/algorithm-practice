// Complete the solution so that it reverses 
// the string value passed into it.

// solution('world'); // returns 'dlrow'

function solution(str){
	newStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
  	a = str[i];
    newStr += a;
  };
  return newStr;
}