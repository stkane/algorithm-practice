/*
Given a string, replace all instances of 'u', 'you', and 'youuuu'
with "me". Do not replace 'you' if it is part of another word 
(e.g., 'youtube' and 'bayou').

NOTE: punctuation handling is silly... need to replace.

*/

function autocorrect(input) {
	input = input.replace(/!/i, ' !');
  input = input.split(' ');
  // u to your sister
  for(let i = 0; i < input.length; i++) {
  	testWord = input[i].toLowerCase();
  	if(testWord === "u" || testWord === "you" || /\byou+\b/igm.test(testWord) ) {
    input[i] = "me";
    }
  };
  input = input.join(' ');
  input = input.replace(/ !/i, '!');
  return input;
}