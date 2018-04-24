//find the longest unique substring of non repeating letters


function longestUniqueSubString(word) {
  let currentString = '';
  let currentLetter = 0;
  let maxString = '';
  let lettersSeen = {};
  for(let i = 0; i < word.length; i++) {
    if(lettersSeen[word[i]] === undefined) {
      lettersSeen[word[i]] = 1;
      currentString += word[i];
    }
    else {
      if(maxString.length < currentString.length) {
        maxString = currentString;
      }
      currentString = '';
    }
  }
  return maxString;
}
