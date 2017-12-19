// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in 
// the alphabet: a = 1, b = 2, c = 3 etc. You need to return the 
// highest scoring word as a string. If two words score the same, 
// return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
  code = {};
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split('');
  for(let i = 0; i < alphabet.length; i++) {
  	code[alphabet[i]] = i + 1;
  }
  words = x.split(' ');
  wordsVal = {};
  words.forEach(el => wordsVal[el] = 0);
 	for(let i = 0; i < words.length; i++) {
  	temp = words[i].split('');
    temp.forEach(el => wordsVal[words[i]] += code[el]);
  }
  answer = words[0];
  for(let i = 1; i < words.length; i++) {
  	if (wordsVal[words[i]] > wordsVal[answer]) {
    	answer = words[i];
    }
  }
  return answer;
}