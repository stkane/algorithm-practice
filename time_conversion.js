// Convert a string of 12 hour time to 
// a string of military (24 hour) time.

function timeConversion(s) {
    let rightTime;
    let timeArr = s.split(':')
    if(s[s.length - 2] === 'P') {
      
      timeArr[0] = parseInt(timeArr[0]) + 12;
      parseInt(timeArr[0]) === 24 ? timeArr[0] = '12' : timeArr;

    } else {
      parseInt(timeArr[0]) === 12 ? timeArr[0] = '00' : timeArr;
    }
    rightTime = timeArr.join(':').substr(0, s.length - 2);
  return rightTime;
}
