// ROT13 is a simple letter substitution cipher 
// that replaces a letter with the letter 13 letters 
// after it in the alphabet. ROT13 is an example of 
// the Caesar cipher.

// Create a function that takes a string and returns 
// the string ciphered with Rot13. If there are numbers 
// or special characters included in the string, they 
// should be returned as they are. Only letters from the 
// latin/english alphabet should be shifted, like in the 
// original Rot13 "implementation".

// Please note that using "encode" in Python is considered 
// cheating.

function rot13(message){
  alpha = "abcdefghijklmnopqrstuvwxyz";
  alpha = alpha.split('');
  messageLower = message.toLowerCase().split('');
  outputMessage = "";
  for(let i = 0; i < messageLower.length; i++) {
  	if(alpha.includes(messageLower[i])) {
    	alphaIndex = alpha.indexOf(messageLower[i]);
      alphaIndex > 12 ? alphaIndex -= 13 : alphaIndex += 13;
      message[i] != messageLower[i] ? outputMessage += alpha[alphaIndex].toUpperCase() : outputMessage += alpha[alphaIndex];
      
    }
    else {
    	outputMessage += messageLower[i];
    }
  };
  return outputMessage;
}