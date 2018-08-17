// # Run Length Encoding
//
// Implement run-length encoding and decoding.
//
// Run-length encoding (RLE) is a simple form of data compression, where runs
// (consecutive data elements) are replaced by just one data value and count.
//
// For example we can represent the original 53 characters with only 13.
//
// ```text
// "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
// ```
//
// RLE allows the original data to be perfectly reconstructed from
// the compressed data, which makes it a lossless data compression.
//
// ```text
// "AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
// ```
//
// For simplicity, you can assume that the unencoded string will only contain
// the letters A through Z (either lower or upper case) and whitespace. This way
// data to be encoded will never contain any numbers and numbers inside data to
// be decoded always represent the count for the following character.
//


var RLE = function() {

}

RLE.encode = function(input) {
  var encoded = '';
  var counter = 1;
  for(let i = 0; i < input.length; i++){
    if(input[i] === input[i + 1]) {
      counter++
    } else {
      counter > 1 ? encoded += counter + input[i] : encoded += input[i];
      counter = 1;
    }
  }
  return encoded;
}

RLE.decode = function(input) {
  var decoded = '';
  var counter = '';
  if(input.length === 0) return input;
  for(let i = 0; i < input.length; i++){
    var currentVal = parseInt(input[i]);

    if(currentVal > 0) {
      counter += currentVal;

    } else {
      var counterInt = parseInt(counter);
      counter.length === 0 ? decoded += input[i] : decoded += input[i].repeat(counterInt);
      counter = '';
    }
  }
  return decoded;
}



module.exports = RLE;
