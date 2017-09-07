/*
Write an algorithm that fits the following pattern:
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
*/

function accum(s) {
	// your code
  splitArr = s.split('').map(function(i){return i.toLowerCase();});
  for(let i = 0; i < splitArr.length; i++) {
  	temp = splitArr[i];
    while(splitArr[i].length < i + 1) {
      splitArr[i] = splitArr[i] + temp;
    };
    splitArr[i] = splitArr[i].charAt(0).toUpperCase() + splitArr[i].slice(1);
  };
  s = splitArr.join("-");
  return s;
}